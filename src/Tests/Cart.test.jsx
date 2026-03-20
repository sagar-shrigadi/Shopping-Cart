import { createMemoryRouter, Outlet, RouterProvider } from "react-router";
import { Routes } from "../Routes";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Cart } from "../Components/Cart/Cart";

const router = createMemoryRouter(Routes, { initialEntries: ["/cart"] });

const context = {
  itemsToCart: [
    {
      id: 6,
      title: "Solid Gold Petite Micropave",
      price: 168,
      qty: 1,
    },
    {
      id: 7,
      title: "Mens Cotton Jacket",
      price: 55.99,
      qty: 1,
    },
  ],
};
const loadCartPageWithSomeContext = () => {
  const routerWithContext = createMemoryRouter([
    {
      path: "/",
      element: <Outlet context={context} />,
      children: [{ index: true, element: <Cart /> }],
    },
  ]);

  render(<RouterProvider router={routerWithContext} />);
};

describe("Empty cart state", () => {
  it("when no items are added to cart, Show default cart page with a link to shop page", () => {
    render(<RouterProvider router={router} />);

    //back btn
    const backBtn = screen.getByTestId("backBtn");
    expect(backBtn).toBeInTheDocument();

    // page heading
    const cartPageHeading = screen.getByRole("heading", { name: "Your Cart" });
    expect(cartPageHeading).toBeInTheDocument();

    // empty cart page headings and desc text
    const cartStatusHeading = screen.getByRole("heading", {
      name: "Your cart is empty",
    });
    const cartStatusDesc = screen.getByText(
      "Start adding Products to your cart and they will appear here.",
    );
    expect(cartStatusHeading).toBeInTheDocument();
    expect(cartStatusDesc).toBeInTheDocument();

    // shop now link
    const shopNowBtn = screen.getByRole("link", { name: "Shop Now" });
    expect(shopNowBtn).toBeInTheDocument();
    expect(shopNowBtn).toHaveAttribute("href", "/shop");
    // screen.debug();
  });
});

describe("When items are added to cart", () => {
  it("default cart screen goes away and number of items in cart is shown alongside page title header", () => {
    loadCartPageWithSomeContext();

    //back btn
    const backBtn = screen.getByTestId("backBtn");
    expect(backBtn).toBeInTheDocument();

    // page heading
    const cartPageHeading = screen.getByRole("heading", { name: "Your Cart" });
    expect(cartPageHeading).toBeInTheDocument();

    // items in cart
    const itemsInCart = screen.getByText(`${context.itemsToCart.length} items`);
    expect(itemsInCart).toBeInTheDocument();

    screen.debug();
  });
  it("product cards are created for each item added in cart with appropriate data", () => {
    loadCartPageWithSomeContext();

    const productsContainer = screen.getByTestId("productsInCartContainer");
    const products = screen.getAllByTestId("productsInCart");

    expect(productsContainer).toContainElement(products[0]);
    expect(products.length).toBe(context.itemsToCart.length); // a card is created for each item in cart

    // product title is present for each card and matches the data provided via outlet
    const productTitles = screen.getAllByTestId("productInCartTitle");
    productTitles.forEach((product, index) => {
      expect(product).toBeInTheDocument();
      expect(product.textContent).toMatch(
        `${context.itemsToCart[index].title}`,
      );
    });

    // product price is present for each card and matches the data provided via outlet
    const productPrices = screen.getAllByTestId("productInCartPrice");
    productPrices.forEach((product, index) => {
      expect(product).toBeInTheDocument();
      expect(product.textContent).toMatch(
        `${context.itemsToCart[index].price} $`,
      );
    });

    // qty input is present for each card matches the data provided via outlet
    const input = screen.getAllByTestId("qtyInput");
    input.forEach((input, index) => {
      expect(input).toBeInTheDocument();
      expect(Number(input.value)).toBe(context.itemsToCart[index].qty);
    });

    // increase qty button is present for each card
    const increase = screen.getAllByRole("button", { name: "+" });
    increase.forEach((btn) => expect(btn).toBeInTheDocument());

    // decrease qty button is present for each card
    const decrease = screen.getAllByRole("button", { name: "-" });
    decrease.forEach((btn) => expect(btn).toBeInTheDocument());

    //remove item from cart button is present for each card
    const removeItem = screen.getAllByRole("button", { name: "Remove" });
    removeItem.forEach((btn) => expect(btn).toBeInTheDocument());

    screen.debug();
  });
});
