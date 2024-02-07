import { GET_LIST, DELETE_ITEM, CLEAR_LIST } from "../actions/types"


const reducer = (state = [], actions) => {
    switch(actions.type){
        case GET_LIST:
            return [...state, {id: actions.data.id ,
                name : `${actions.data.quantity} ${actions.data.item}` , 
                status : `pending`}]
        case DELETE_ITEM:
            return state.filter(item => item.id !== actions.data)
        case CLEAR_LIST:
            return []
        default:
            return state
    }
}

export default reducer