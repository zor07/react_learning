import React from 'react';
import AppMain from "./App";
import * as ReactDOM from "react-dom";

test('renders without crashing', () => {
  const div = document.createElement("div")
  ReactDOM.render(<AppMain/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
