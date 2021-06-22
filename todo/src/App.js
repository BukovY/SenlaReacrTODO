import React, { Component } from 'react';
import Header from "./component/Header";
import Tabs from "./component/Tabs";
import AddTask from "./component/AddTask";
import Items from "./component/Items";


export default class App extends Component {
  state = {
    todoData: [],
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
    let newTask = { status: "active", isImportant: false, content: this.state.newTask, index: this.state.todoData.length +1}
    this.state.newTask = ''
    localStorage.setItem("myTodo", JSON.stringify([...this.state.todoData, newTask]));
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
    localStorage.setItem("myTodo", JSON.stringify([...this.state.todoData]));
    this.setState(({todoData})=>{
      return {
        todoData: this.state.todoData
      }
    })
  }
  deleteHandler = (index) => {
    this.state.todoData = this.state.todoData.filter(el => el.index != index)
    localStorage.setItem("myTodo", JSON.stringify([...this.state.todoData]));
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
    localStorage.setItem("myTodo", JSON.stringify([...this.state.todoData]));
    this.setState(({todoData})=>{
      return {
        todoData: this.state.todoData
      }
    })
  }
  localSt(){
    if (localStorage.getItem("myTodo")) {
      return JSON.parse(localStorage.getItem("myTodo"))
    } else {
      return []
    }
  }

  render() {
    this.state.todoData = this.localSt()



    const todoToRender = this.state.todoData
        .filter(el => this.filterTodo(el, this.state.type))
        .filter(el => this.filterSearch(el.content, this.state.searchValue))
    
    return (
        <div className="container">
          <Header searchValue={this.state.searchValue} searchHandler={this.searchHandler}/>
          <div className="content">
          <Tabs typeHandler={this.typeHandler} type={this.state.type}/>
          <AddTask newTask={this.state.newTask} taskHandler={this.taskHandler} addTask={this.addTask}/>
            <div className="clearfix"></div>
          <Items todoToRender={todoToRender.reverse()} importantHandler={this.importantHandler} deleteHandler={this.deleteHandler} handlerStatus={this.handlerStatus}/>
          </div>
        </div>
    );
  }
}
