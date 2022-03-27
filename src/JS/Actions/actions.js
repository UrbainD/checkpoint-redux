import { EDIT_Action } from "../Constants/actions-types";
import { ADD_TODO } from "../Constants/actions-types";
import { REMOVE_ACTION } from "../Constants/actions-types";
import { STATUS_ACTION } from "../Constants/actions-types"

export const editAction = (payload) => {
    return {
        type: EDIT_Action,
        payload,
    };
};

export const removeAction = (payload) => {
    return {
        type: REMOVE_ACTION,
        payload,
    };
};

export const statusAction = (payload) => {
    return {
        type: STATUS_ACTION,
        payload,
    }
}
export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload,
    };
};