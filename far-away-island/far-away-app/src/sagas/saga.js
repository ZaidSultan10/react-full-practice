import { GET_LIST } from "../actions/types";
import {put, takeEvery} from 'redux-saga/effects'

function* getItems(){
    yield put({type : GET_LIST, data:[]})
}

function* getList(){
    yield takeEvery(GET_LIST, getItems)
}

export default getList