import { AxiosError, AxiosResponse } from "axios";
import {
  ActionType,
  AsyncActionCreatorBuilder,
  createAsyncAction,
  createReducer,
  getType,
} from "typesafe-actions";
import { transform } from "typescript";
import { GithubProfile } from "../api/github";
import * as IActions from "./Region/actions";

export enum LIST {
  REQUEST = "/LIST_REQUEST",
  SUCCESS = "/LIST_SUCCESS",
  FAILURE = "/LIST_FAILURE",
}
const { REQUEST, SUCCESS, FAILURE } = LIST;

export const asyncActionTypeCreator = <Request, Success, Error>(
  prefix: string
) =>
  createAsyncAction<typeof REQUEST, typeof SUCCESS, typeof FAILURE, never>(
    REQUEST,
    SUCCESS,
    FAILURE
  )<Request, Success, Error>();
// [string, [string, undefined]],
// [AxiosResponse<GithubProfile>, [any, undefined]],
// [string, [AxiosError, undefined]]

export const createReducerCreator = <
  A extends AsyncActionCreatorBuilder<any, any, any>,
  S = {}
>(
  actions: A,
  initialState = {} as S
) => {
  const [request, success, failure] = [
    actions.request,
    actions.success,
    actions.failure,
  ].map(getType);
  type Action = ActionType<typeof IActions>;
  return createReducer<S, Action>(initialState)
    .handleAction(request, (state, action) => {
      return {
        ...state,
        // ...(action.payload && { data: action.payload }),
      };
    })
    .handleAction(success, (state, action: Action) => {
      return { ...state, data: action.payload };
    })
    .handleAction(failure, (state, action) => {
      return { ...state, message: action.payload.message };
    });
};
