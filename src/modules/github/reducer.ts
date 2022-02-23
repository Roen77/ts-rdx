import { createReducer } from "typesafe-actions";
import { getUserProfileAsync } from "./action";
import {
  asyncState,
  createAsyncReducer,
  transformToArray,
} from "../../lib/reducerUtils";
// import {
//   GET_USER_PROFILE,
//   GET_USER_PROFILE_ERROR,
//   GET_USER_PROFILE_SUCCESS,
// } from "./action";
import { GithubAction, GithubState } from "./types";

const initialState: GithubState = {
  userProfile: asyncState.initial(),
};

const github = createReducer<GithubState, GithubAction>(
  initialState
).handleAction(
  transformToArray(getUserProfileAsync),
  createAsyncReducer(getUserProfileAsync, "userProfile")
);

// const initialState: GithubState = {
//   userProfile: {
//     loading: false,
//     error: null,
//     data: null,
//   },
// };

// const github = createReducer<GithubState, GithubAction>(initialState, {
//   [GET_USER_PROFILE]: (state) => ({
//     ...state,
//     userProfile: {
//       loading: true,
//       error: null,
//       data: null,
//     },
//   }),
//   [GET_USER_PROFILE_SUCCESS]: (state, action) => ({
//     ...state,
//     userProfile: {
//       loading: false,
//       error: null,
//       data: action.payload,
//     },
//   }),
//   [GET_USER_PROFILE_ERROR]: (state, action) => ({
//     ...state,
//     userProfile: {
//       loading: false,
//       error: action.payload,
//       data: null,
//     },
//   }),
// });

export default github;
