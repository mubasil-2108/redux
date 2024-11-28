import { put, takeEvery } from "redux-saga/effects";
import { SET_USER_DATA, USER_LIST } from "../../services";

function* userList(){
    const url = 'https://dummyjson.com/users'
    let response = yield fetch(url);
    response = yield response.json();
    yield put({
        type: SET_USER_DATA,
        response
    })
}

function* SagaData(){
    yield takeEvery(USER_LIST,userList)
}
export default SagaData