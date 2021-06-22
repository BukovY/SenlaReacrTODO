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
    searchValue: 'sdsd',
    type: 'done',
    toRender: [{ status: "active", isImportant: true, content: 'dfdfadgadg', index: 0 },
      { status: "done", isImportant: false, content: 'wrgwr wr gwr gwre g', index: 1 },
      { status: "active", isImportant: true, content: 'wd fw dc wdc wef wte', index: 2 },
      { status: "done", isImportant: true, content: 'wrgwr wr gwr gwre g', index: 3 },
      { status: "active", isImportant: false, content: 'wd fw dc wdc wef wte', index: 4 },
      { status: "done", isImportant: false, content: 'wrgwr wr gwr gwre g', index: 5 }
    ],
  };

  searchHandler = (ev) => {
    this.setState(({searchValue})=>{
      return {
        searchValue: ev
      }
    })
  }
  typeHandler = (type) => {
    this.setState(({type})=>{
      return {
        searchValue: type
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
  importantToggle = (el) => {
    console.log(el)

  }

  todos = () => {
    let todotorender = [];
    for(let i of this.state.todoData){
      todotorender.push([...i])
    }
    todotorender.filter(el => el.status == this.state.type)


    this.setState(({toRender})=>{
      return {
        toRender: todotorender
      }
    })
  }

  render() {



    return (
        <div className="App">
          <Header searchValue={this.state.searchValue} searchHandler={this.searchHandler}/>
          <Tabs typeHandler={this.typeHandler}/>
          <AddTask newTask={this.state.newTask} taskHandler={this.taskHandler} addTask={this.addTask}/>
          <Items todoToRender={this.state.toRender}/>




          {/*
          <div className="container">
            <div
                className="background-image"
                onClick={() => console.log(this.state)}
            ></div>
            <Header
                searchItem={this.searchItem}
                filter={navigation}
                onFilterChange={this.onFilterChange}
            />
            <Main
                todos={visibleItems}
                handleOnDeleted={this.deleteItem}
                handleAddTask={this.addTask}
                handelOnLiClick={this.handelOnLiClick}
                handelOnMarkImportant={this.handelOnMarkImportant}
            />
          </div>*/}

        </div>
    );

  }
}
