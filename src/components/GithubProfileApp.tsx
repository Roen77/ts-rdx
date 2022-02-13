import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { getUserProfileAsync } from "../modules/github";
import GithubForm from "./GithubForm";
import GithubProfileInfo from "./GithubProfileInfo";

function GithubProfileApp() {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.github.userProfile
  );
  const dispatch = useDispatch();

  const onSubmitUsername = (username: string) => {
    dispatch(getUserProfileAsync.request(username));
    // dispatch(getUserProfileThunk(username));
  };

  return (
    <>
      <GithubForm onSubmitUsername={onSubmitUsername} />
      {loading && <p>로딩중..</p>}
      {error && <p>에러발생..</p>}
      {data && (
        <GithubProfileInfo
          bio={data.bio}
          blog={data.blog}
          name={data.name}
          thumbnail={data.avatar_url}
        />
      )}
    </>
  );
}

export default GithubProfileApp;
