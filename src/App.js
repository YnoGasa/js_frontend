import React from 'react';
import ToDoTask from './ToDoTask';
import ToDoTaskAdd from './ToDoTaskAdd';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    }

    this.onTaskDelete = this.onTaskDelete.bind(this);
    this.onTaskAdd = this.onTaskAdd.bind(this);
  }
  
  onTaskDelete(_id) {
    this.setState({
      tasks: this.state.tasks.filter(function(task) {
        return task._id !== _id ? true : false;        
      })
    });
  }

  onTaskAdd(task) {
    this.setState({
      tasks: [...this.state.tasks, task]
    });
  }

  componentDidMount() {
    fetch('/tasks').then(function(res) {
      return res.json();
    }).then((data) => {
      this.setState({
        tasks: data
      })
    });
  }


  render() {
    return (
      <div className="App">
        <ToDoTaskAdd onTaskAdd={this.onTaskAdd} />
        <ul>
        {
          this.state.tasks.map((task) => {
            return (
              <ToDoTask key={task._id} onTaskDelete={this.onTaskDelete} task={task}/>
            );
          })
        }
        </ul>
      </div>
    );
  }
}

export default App;
