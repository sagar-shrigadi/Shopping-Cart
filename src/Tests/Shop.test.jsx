import { createMemoryRouter, Outlet, RouterProvider } from "react-router";
import { describe, expect, it, vi } from "vitest";
import { Routes } from "../Routes";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { Shop } from "../Components/Shop/Shop";

const router = createMemoryRouter(Routes, { initialEntries: ["/shop"] });

// mocking fetch function to avoid sending an actual http request while testing
const product = [
  {
    id: 6,
    title: "Solid Gold Petite Micropave",
    price: 168,
  },
  {
    id: 7,
    title: "Mens Cotton Jacket",
    price: 55.99,
  },
];
window.fetch = vi.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(product),
  });
});

async function loadShopAndWaitForLoadingToBeOver() {
  const contextValue = { itemsToCart: [] };

  const testRouter = createMemoryRouter([
    {
      path: "/",
      element: <Outlet context={contextValue} />,
      children: [{ index: true, element: <Shop /> }],
    },
  ]);

  render(<RouterProvider router={testRouter} />);

  await waitForElementToBeRemoved(() =>
    screen.getByRole("heading", { name: "Loading..." }),
  );
}

describe("Shop.jsx-initial load", () => {
  it("loading text is shown while the fetch request is in progress", async () => {
    render(<RouterProvider router={router} />);

    const loading = screen.getByRole("heading", { name: "Loading..." });
    expect(loading).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.queryByText("Loading..."));
  });
});

describe("Isolated Shop test", () => {
  it("shop page correctly loads with fetched data using outlet context", async () => {
    await loadShopAndWaitForLoadingToBeOver();

    // back button
    const backBtn = screen.getByTestId("backBtn");
    expect(backBtn).toBeInTheDocument();

    // heading for shop page
    const shopHeading = screen.getByRole("heading", { name: "Shop Products" });
    expect(shopHeading).toBeInTheDocument();

    // shop complementary text
    const shopDesc = screen.getByText("Browse our Curated Collections");
    expect(shopDesc).toBeInTheDocument();

    // filter button
    const filterBtn = screen.getByText("Filter");
    expect(filterBtn).toBeInTheDocument();

    // sort button
    const sortBtn = screen.getByText("Sort");
    expect(sortBtn).toBeInTheDocument();

    // product cards container
    const productContainer = screen.getByTestId("productContainer");
    const products = screen.getAllByTestId("products");

    expect(products.length).toBe(product.length);
    expect(productContainer).toContainElement(products[0]);
    expect(productContainer).toContainElement(products[1]);
    // screen.debug();
  });
  it("products created with fetched data are properly displayed", async () => {
    await loadShopAndWaitForLoadingToBeOver();

    // product 1
    const product1Title = screen.getByRole("heading", {
      name: "Solid Gold Petite Micropave",
    });
    expect(product1Title).toBeInTheDocument();

    const product1Price = screen.getByText("168 $");
    expect(product1Price).toBeInTheDocument();

    // product 2
    const product2Title = screen.getByRole("heading", {
      name: "Mens Cotton Jacket",
    });
    expect(product2Title).toBeInTheDocument();

    const product2Price = screen.getByText("55.99 $");
    expect(product2Price).toBeInTheDocument();

    const addToCartBtns = screen.getAllByRole("button", {
      name: "Add To Cart",
    });
    addToCartBtns.forEach((btn) => expect(btn).toBeInTheDocument());
  });
});
