import { GET_LIST } from "./types";

export const getList = (data) => {
    console.log('data action --',data)
    return {type : GET_LIST, data : data}
}