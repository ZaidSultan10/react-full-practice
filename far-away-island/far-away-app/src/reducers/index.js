import { GET_LIST, DELETE_ITEM, CLEAR_LIST, SORT_ID, ITEM_STATUS } from "../actions/types"


const reducer = (state = [], actions) => {
    switch(actions.type){
        case GET_LIST:
            return [...state, {id: actions.data.id ,
                name : `${actions.data.quantity} ${actions.data.item}` , 
                status : `Pending`}]
        case DELETE_ITEM:
            return state.filter(item => item.id !== actions.data)
        case SORT_ID:
            return state.map((item) => {return {id: item.id > actions.data ? item.id - 1 : item.id, name : item.name, status : item.status}})
        case ITEM_STATUS:
            return state.map((item) => item.id === actions.data.id ? {...item, status : actions.data.status} : item)
        case CLEAR_LIST:
            return []
        default:
            return state
    }
}

export default reducer