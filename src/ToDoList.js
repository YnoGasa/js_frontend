import React from 'react';
import ToDoTask from './ToDoTask';


class ToDoList extends React.Component {

  render() {
    return (
      <div className="List">
        <ul>
        {
          this.props.tasks.map((task) => {
            return (
              <ToDoTask key={task._id} onTaskDelete={this.props.onTaskDelete} task={task}/>
            );
          })
        }
        </ul>
      </div>
    );
  }
}

export default ToDoList;
