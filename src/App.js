import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import shortid from 'shortid';

const initialState = {
  todos: [
    { id: 1, task: 'Nam tristique tortor eu pede.', completed: false },
    { id: 2, task: "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.", completed: false },
    { id: 3, task: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.", completed: false },
    { id: 4, task: "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.", completed: false },
    { id: 5, task: "Mauris lacinia sapien quis libero.", completed: false },
    { id: 6, task: "Nam nulla.", completed: true },
    { id: 7, task: "Cras pellentesque volutpat dui.", completed: false },
    { id: 8, task: "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.", completed: false },
    { id: 9, task: "Vivamus vel nulla eget eros elementum pellentesque.", completed: false },
    { id: 10, task: "Aliquam sit amet diam in magna bibendum imperdiet.", completed: true }
  ],

  newTodo: {
    task: '',
    id: shortid.generate(),
    completed: false
  }
};

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  state = initialState;

  handleTodoEdit = e => {
    const { newTodo } = this.state;
    this.setState({ ...this.state, newTodo: { ...newTodo, task: e.target.value}} );
  }

  addTodo = e => {
    e.preventDefault();
    const { newTodo, todos } = this.state;

    if(newTodo.task !== '') {
      this.setState({
        ...this.state,
        todos: [...todos, newTodo],
        newTodo: {
          ...initialState.newTodo,
          id: shortid.generate()
        }
      });
    }
  }

  render() {
    const { todos, newTodo } = this.state;
    return (
      <div>
        <TodoList todos={todos} />
        <TodoForm task={newTodo.task} onChange={this.handleTodoEdit} onSubmit={this.addTodo} />
      </div>
    );
  }
}

export default App;
