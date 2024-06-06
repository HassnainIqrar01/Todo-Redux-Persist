import { ADD_TASK, DELETE_TASK, COMPLETE_TASK } from "./actions";

const initialData = {
  taskItems: [],
  deletedTasks: [],
};

const taskReducer = (state = initialData, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        taskItems: [
          ...state.taskItems,
          { text: action.payload, completed: false },
        ],
      };


      
      //---------------Previous Delete Task------------------
    // case DELETE_TASK:
    //   return {
    //     ...state,
    //     taskItems: [
    //       ...state.taskItems.filter((task) => task.text !== action.payload),
    //     ],
    //   };


      //------------------Updated Deleteb Task with Slice ()-----------------------
          case DELETE_TASK:
      
    const deletedTaskIndex = state.taskItems.findIndex((task) => task.text === action.payload);
      if (deletedTaskIndex !== -1) {

        const deletedTask = state.taskItems[deletedTaskIndex];
        const updatedTaskItems = state.taskItems.slice(0, deletedTaskIndex).concat(state.taskItems.slice(deletedTaskIndex + 1));
          console.log("Deleted Task:", deletedTask);

        return {
          ...state,
          taskItems: updatedTaskItems,
          deletedTasks: state.deletedTasks.concat(deletedTask),
        };
      }
      return state;

 
    default:
      return state;
  }
};

export default taskReducer;
