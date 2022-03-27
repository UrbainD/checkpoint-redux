import { combineReducers } from "redux";
import { Todoreducer } from "./tasksReducer"

const rootReducer = combineReducers({

    Todoreducer: Todoreducer,

})

export default rootReducer;