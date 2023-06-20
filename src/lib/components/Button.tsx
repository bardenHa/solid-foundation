import { Component, JSX, ParentComponent, children } from "solid-js";

export const Button: ParentComponent = ({ children }) => {
  return <button class="bg-red-500 text-white">{children}</button>;
};
