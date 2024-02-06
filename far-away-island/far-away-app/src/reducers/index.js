import { GET_LIST } from "../actions/types"


const reducer = (state = [], actions) => {
    switch(actions.type){
        case GET_LIST:
            return [...state, {name : `${actions.data.quantity} ${actions.data.item}` , status : `pending`}]
        default:
            return state
    }
}

export default reducer