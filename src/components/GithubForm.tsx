import React, { ChangeEvent, FormEvent, useState } from "react";

type GithubUsernameProps = {
  onSubmitUsername: (username: string) => void;
};

function GithubForm({ onSubmitUsername }: GithubUsernameProps) {
  const [value, setValue] = useState("");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitUsername(value);
  };
  return (
    <form className="GithubUsernameForm" onSubmit={onSubmit}>
      <input
        onChange={onChange}
        value={value}
        placeholder="Github 계정명을 입력하세요."
      />
      <button type="submit">조회</button>
    </form>
  );
}

export default GithubForm;
