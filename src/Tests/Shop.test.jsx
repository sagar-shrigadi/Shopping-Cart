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
window.fetch = vi.fn(() => {
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

    const backBtn = screen.getByText("Back");
    const shopHeading = screen.getByRole("heading", { name: "Shop Products" });
    const shopDesc = screen.getByText("Browse our Curated Collections");
    const filterBtn = screen.getByText("Filter");
    const sortBtn = screen.getByText("Sort");
    const productContainer = screen.getByTestId("productContainer");
    const products = screen.getAllByTestId("products");

    expect(backBtn).toBeInTheDocument();
    expect(shopHeading).toBeInTheDocument();
    expect(shopDesc).toBeInTheDocument();
    expect(filterBtn).toBeInTheDocument();
    expect(sortBtn).toBeInTheDocument();
    expect(products.length).toBe(2);
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
    const product1Price = screen.getByText("168 $");

    // product 2
    const product2Title = screen.getByRole("heading", {
      name: "Mens Cotton Jacket",
    });
    const product2Price = screen.getByText("55.99 $");

    const addToCartBtns = screen.getAllByRole("button", {
      name: "Add To Cart",
    });

    expect(product1Title).toBeInTheDocument();
    expect(product1Price).toBeInTheDocument();
    expect(product2Title).toBeInTheDocument();
    expect(product2Price).toBeInTheDocument();
    expect(addToCartBtns[0]).toBeInTheDocument();
    expect(addToCartBtns[1]).toBeInTheDocument();
  });
});
