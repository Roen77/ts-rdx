import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { getUserProfile } from "../../api/github";
import createAsyncThunk from "../../lib/createAsyncThunk";
import { getUserProfileAsync } from "./action";
import { GithubAction } from "./types";

export function getUserProfileThunk(
  username: string
): ThunkAction<Promise<void>, RootState, null, GithubAction> {
  return async (dispatch) => {
    const { request, success, failure } = getUserProfileAsync;
    dispatch(request(""));
    try {
      console.log("thunk 실행");
      const userProfile = await getUserProfile(username);
      dispatch(success(userProfile));
    } catch (error: any) {
      dispatch(failure(error));
    }
  };
}

// export const getUserProfileThunk = createAsyncThunk(
//   getUserProfileAsync,
//   getUserProfile
// );
