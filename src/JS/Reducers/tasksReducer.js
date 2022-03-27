import { ADD_TODO } from "../Constants/actions-types";
import { EDIT_Action } from "../Constants/actions-types"
import { REMOVE_ACTION } from "../Constants/actions-types"
import { STATUS_ACTION } from "../Constants/actions-types"

const initialState = {
  todoList: [
    { text: "Ma premiere tâche", id: "0", isDone: false },
    { text: "Ma deuxieme tâche", id: "1", isDone: true },
    { text: "Ma troisieme tâche", id: "2", isDone: false },
  ],
};
export const Todoreducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_TODO:
      return {
        ...state,

        todoList: [...state.todoList, action.payload],
      };
    case EDIT_Action:
      return {

        ...state,

        todoList: state.todoList.map((el) => (el.id === action.payload.id ? { ...el, text: action.payload.text } : el))

      }
    case REMOVE_ACTION:
      return {

        ...state,
        todoList: state.todoList.filter(el => el.id !== action.payload)
      }

    case STATUS_ACTION:
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
        )
      };

    default: return state;

  }

};