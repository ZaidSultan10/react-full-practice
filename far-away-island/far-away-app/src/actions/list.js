import { CLEAR_LIST, DELETE_ITEM, GET_LIST } from "./types";

export const getList = (data) => {
    return {type : GET_LIST, data : data}
}

export const deleteItem = (id) => {
    return {type : DELETE_ITEM, data : id}
}

export const clearListAction = () => {
    return {type : CLEAR_LIST}
}
