import App from "./App";
import { Body } from "./Components/Home/Body";

export const Routes = [
  {
    path: "/",
    element: <App />,
    children: [{ index: true, element: <Body /> }],
  },
];
