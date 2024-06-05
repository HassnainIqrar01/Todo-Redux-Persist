import React from "react";
import styles from "./TodoItem.style";

const TodoItem = ({task, deleteTodo, completeTodo}) => {
  return (
    <div>
      <div style={styles.taskContainer}>
        <div style={styles.taskWrapper}>
          <p style={{...styles.task, textDecoration: task.completed === true ? 'line-through' : 'none' }}>{task.text}</p>
          <div style={styles.iconWrapper}>
            <i className="fas fa-check-circle" style={styles.completedIcon} onClick={() => {completeTodo(task.text)}}></i>
            <i className="fas fa-trash-alt" style={styles.deletedIcon} onClick={()=> {deleteTodo(task)}}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
