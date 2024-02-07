import { CLEAR_LIST, DELETE_ITEM, GET_LIST, ITEM_STATUS, SORT_ID } from "./types";

export const getList = (data) => {
    return {type : GET_LIST, data : data}
}

export const deleteItem = (id) => {
    return {type : DELETE_ITEM, data : id}
}

export const sortIds = (id) => {
    return {type : SORT_ID, data : id}
}

export const clearListAction = () => {
    return {type : CLEAR_LIST}
}

export const itemStatus = (data) => {
    return {type : ITEM_STATUS, data : data}
}
