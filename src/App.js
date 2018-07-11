import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import FormTask from './components/FormTask';
import Card from './components/Card';


class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    };
    this.handlerSeeTask = this.handlerSeeTask.bind(this);
    this.handlerAddTask = this.handlerAddTask.bind(this);
    this.handlerRemoveTask = this.handlerRemoveTask.bind(this);
  }

  componentDidMount() {
    this.handlerSeeTask();
  }

  handlerSeeTask(){
    fetch('http://localhost:3000/',{})
      .then(result => {
        return result.json();
      }).then(data => {
        this.setState({ tasks: data.row })
      })
  }

  handlerAddTask(task) {
    let aux = {
      title: task.title,
      author: task.author,
      priority: task.priority,
      description: task.description
    }

   fetch('http://localhost:3000/addTask', {
        method: "POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(aux)
    })
      .then((res) => {
        return res.json()
      }).then((data) => {
        this.handlerSeeTask();

      })
  }

  handlerRemoveTask(index) {
    console.log(index)
    
    let aux = {
      id: index,
    }

   fetch('http://localhost:3000/deleteTask', {
        method: "POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(aux)
    })
      .then((res) => {
        return res.json()
      }).then((data) => {
        this.handlerSeeTask();
      })
  }

  render() {
    const tasks = this.state.tasks.map((task, i) => {
      return (
        <Card task={task} key={i} index={i} onDeleteTask={this.handlerRemoveTask} />
      )
    });

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="" className="text-white">
            Tasks -
                <span className="badge badge-pill badge-light ml-2">
              {this.state.tasks.length}
            </span>
          </a>
        </nav>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-3">
              <img src={logo} className="App-logo" atl="logo" />
              <FormTask onAddTask={this.handlerAddTask} />
            </div>
            <div className="col-md-9">
              <div className="row">
                {tasks}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
