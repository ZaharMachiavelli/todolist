import React from "react";
import Task from "./components/task.js";
import TaskInput from "./components/Tasklsinput.js"


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {id:0, title: 'create todo-react app1',done: false,},
        {id:1, title: 'create todo-react app2',done: true,},
        {id:2, title: 'create todo-react app3',done: false,},
      ]
    }
  }

  addTask = task => {
    
    let {tasks} = this.state;
    tasks.push({
      id: tasks.length !==0 ? tasks.length: 0,
      title: task,
      done:false
    })
    this.setState(state=>{
      return tasks;
    })

    /* this.setState(state =>{
      let {tasks} = state;
      tasks.push({
        id: tasks.length !==0 ? tasks.length: 0,
        title: task,
        done:false
      })
      return tasks;
    });  несмотря на то, что этот код более грамотный, при его использовании в список добавляются два элемента*/ 
  }

  doneTask = (id) => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state =>{
      let {tasks} = state;
      tasks[index].done = true;
      return tasks;
    });
  }

  deleteTask = (id) => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let {tasks} = state;
      delete tasks[index];
      return tasks;
    });
  }

  render() {
    let {tasks} = this.state;
    const activeTasks = tasks.filter(task=>!task.done);
    const doneTasks = tasks.filter(task=>task.done);


    return (
      <div className="App">
        <h1 className="top">Active Tasks: {activeTasks.length}</h1>
        {[...activeTasks,...doneTasks].map(task=>(
        <Task 
        doneTask={()=> this.doneTask(task.id)} 
        deleteTask = {()=> this.deleteTask(task.id)}
        task={task} 
        key={task.id}>
        </Task>))}
        <TaskInput addTask ={this.addTask}></TaskInput>
      </div>
    )
    
  }
}

export default App;
