import React, { Component } from 'react';
import Header from "./component/Header";
import Tabs from "./component/Tabs";
import AddTask from "./component/AddTask";
import Items from "./component/Items";



export default class App extends Component {
  state = {
    todoData: [{ status: "active", isImportant: true, content: 'dfdfadgadg', index: 0 },
      { status: "done", isImportant: false, content: 'wrgwr wr gwr gwre g', index: 1 },
      { status: "active", isImportant: true, content: 'wd fw dc wdc wef wte', index: 2 },
      { status: "done", isImportant: true, content: 'wrgwr wr gwr gwre g', index: 3 },
      { status: "active", isImportant: false, content: 'wd fw dc wdc wef wte', index: 4 },
      { status: "done", isImportant: false, content: 'wrgwr wr gwr gwre g', index: 5 }
    ],
    newTask: '',
    searchValue: '',
    type: 'all',
  };


  searchHandler = (ev) => {
    this.setState(({searchValue})=>{
      return {
        searchValue: ev
      }
    })
  }
  typeHandler = (el) => {
    this.setState(({type})=>{
      return {
        type: el
      }
    })
  }
  taskHandler = (el) => {
    this.setState(({newTask})=>{
      return {
        newTask: el
      }
    })
  }
  addTask = () => {
    let newTask = { status: "done", isImportant: false, content: this.state.newTask, index: this.state.todoData.length +1}
    this.state.newTask = ''
    this.setState(({todoData})=>{
      return {
        todoData: [...todoData, newTask]
      }
    })
  }
  filterTodo(el, status){
    if(status == 'all'){
      return true
    }
    if(status == el.status){
      return true
    }
    return false
  }
  filterSearch = (content, serchterm) =>{
    content.toUpperCase()
    serchterm.toUpperCase()
    if(content.indexOf(serchterm) == -1){
      console.log('in')
      return false
    } else {
      return true
    }
  }


  importantHandler = (index) => {
    for(let i of this.state.todoData){
      if(i.index == index){
        i.isImportant = !i.isImportant
      }
    }
    this.setState(({todoData})=>{
      return {
        todoData: this.state.todoData
      }
    })
  }
  deleteHandler = (index) => {
    this.state.todoData = this.state.todoData.filter(el => el.index != index)
    this.setState(({todoData})=>{
      return {
        todoData: this.state.todoData
      }
    })
  }
  handlerStatus = (index, ev) => {
    if(ev.tagName === 'DIV' || ev.tagName === 'P'){
      for(let i of this.state.todoData){
        if(i.index == index){
          if(i.status == 'done'){
            i.status = 'active'
          } else {
            i.status = 'done'
          }
        }
      }
    }
    this.setState(({todoData})=>{
      return {
        todoData: this.state.todoData
      }
    })
  }
  render() {
    const todoToRender = this.state.todoData.reverse()
        .filter(el => this.filterTodo(el, this.state.type))
        .filter(el => this.filterSearch(el.content, this.state.searchValue))
    
    return (

        <div className="App">
          <Header searchValue={this.state.searchValue} searchHandler={this.searchHandler}/>
          <Tabs typeHandler={this.typeHandler}/>
          <AddTask newTask={this.state.newTask} taskHandler={this.taskHandler} addTask={this.addTask}/>
          <Items todoToRender={todoToRender} importantHandler={this.importantHandler} deleteHandler={this.deleteHandler} handlerStatus={this.handlerStatus}/>
        </div>
    );

  }
}
