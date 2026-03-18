import App from "./App";
import { Cart } from "./Components/Cart/Cart";
import { Body } from "./Components/Home/Body";
import { Shop } from "./Components/Shop/Shop";

export const Routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Body /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
    ],
  },
];
