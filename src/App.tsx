import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import TodoApp from "./components/TodoApp";
import GithubProfileApp from "./components/GithubProfileApp";

function App() {
  return (
    <>
      <Counter />
      <TodoApp />
      <GithubProfileApp />
    </>
  );
}

export default App;
