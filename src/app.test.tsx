import {render, screen} from "@testing-library/react";
import App from "./app";
import {Provider} from "react-redux";
import {store} from "./app/store";


test("Render main element", () => {
  render(<Provider store={store}><App/></Provider>);
  const appElement = screen.getByRole("logo")
  expect(appElement).toBeDefined();
});
