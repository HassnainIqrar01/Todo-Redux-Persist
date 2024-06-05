import React from "react";
import { connect } from "react-redux";
import AddTodo from "../components/addTodo/AddTodo";
import TodoItem from "../components/todoItem/TodoItem";
import { addTask, deleteTask, completeTask } from "../redux/actions";

const Main = ({ taskItems, addTodo, deleteTodo, completeTodo }) => {
  console.log("===>", taskItems);
  return (
    <div>
      <div>
        <h1>Todo List</h1>
        <div>
          <AddTodo addTodo={(todo) => addTodo(todo)} />
          <hr />
        </div>
        {taskItems.map((task) => (
          <TodoItem
            key={task.id} 
            task={task}
            deleteTodo={() => deleteTodo(task.text)} 
            completeTodo={() => completeTodo(task)} 
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  taskItems: state.taskItems,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (task) => dispatch(addTask(task)),
  deleteTodo: (task) => dispatch(deleteTask(task)),
  completeTodo: (task) => dispatch(completeTask(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
