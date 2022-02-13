import { getUserProfileAsync, GET_USER_PROFILE } from "./action";
import { takeEvery } from "redux-saga/effects";
import createAsyncSaga from "../../lib/createAsyncSaga";
import { getUserProfile } from "../../api/github";

const getUserProfileSaga = createAsyncSaga(getUserProfileAsync, getUserProfile);

export function* githubSaga() {
  yield takeEvery(GET_USER_PROFILE, getUserProfileSaga);
}
