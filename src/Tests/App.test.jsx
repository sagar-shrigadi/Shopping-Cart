import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { createMemoryRouter, RouterProvider } from "react-router";
import { Routes } from "../Routes";

const router = createMemoryRouter(Routes);

describe("App.jsx-Header", () => {
  it("input element and search button is present", () => {
    render(<RouterProvider router={router} />);
    const input = screen.getByPlaceholderText(
      "What are you looking for today ?",
    );
    const searchBtn = screen.getByTitle("Search");

    expect(input).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();
  });
  it("nav links in header are present and have proper href set", () => {
    render(<RouterProvider router={router} />);

    const toShopLink = screen.getByTestId("toShop");
    expect(toShopLink).toBeInTheDocument();
    expect(toShopLink).toHaveAttribute("href", "/shop");

    const toCartLink = screen.getByTestId("toCart");
    expect(toCartLink).toBeInTheDocument();
    expect(toCartLink).toHaveAttribute("href", "/cart");
  });
});

describe("App.jsx-Hero", () => {
  it("render H1 in hero", () => {
    render(<RouterProvider router={router} />);
    const headline = screen.getByRole("heading", {
      name: "Lorem ipsum dolor sit amet consectetur",
    });

    expect(headline).toBeInTheDocument();
  });

  it("render call to action button in hero section and it has proper href set", () => {
    render(<RouterProvider router={router} />);

    const LinkBtn = screen.getByRole("link", { name: "Shop Now" });

    expect(LinkBtn).toBeInTheDocument();
    expect(LinkBtn).toHaveAttribute("href", "/shop");
  });
});

describe("App.jsx-Categories", () => {
  it("Category h2 is present", () => {
    render(<RouterProvider router={router} />);
    const h2 = screen.getByRole("heading", { name: "Shop By Categories" });

    expect(h2).toBeInTheDocument();
  });
});

describe("App.jsx-Footer", () => {
  it("All Links are present in top footer", () => {
    render(<RouterProvider router={router} />);

    const LinkColumnOne = screen.getByTestId("topFooterLinksContainer1");
    const LinkColumnTwo = screen.getByTestId("topFooterLinksContainer2");
    const LinkColumnThree = screen.getByTestId("topFooterLinksContainer3");

    const ColumnOneLinks = within(LinkColumnOne).getAllByRole("link");
    const ColumnTwoLinks = within(LinkColumnTwo).getAllByRole("link");
    const ColumnThreeLinks = within(LinkColumnThree).getAllByRole("link");

    // link column one
    expect(ColumnOneLinks.length).toBe(4);
    ColumnOneLinks.map((link) => {
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "#");
    });

    // link column two
    expect(ColumnTwoLinks.length).toBe(4);
    ColumnTwoLinks.map((link) => {
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "#");
    });

    // link column three
    expect(ColumnThreeLinks.length).toBe(4);
    ColumnThreeLinks.map((link) => {
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "#");
    });
  });

  it("All elements and links are present in bottom footer", () => {
    render(<RouterProvider router={router} />);

    const bottomFooterLinksContainer = screen.getByTestId(
      "bottomFooterLinksContainer",
    );
    const bottomFooterLinks = within(bottomFooterLinksContainer).getAllByRole(
      "link",
    );

    expect(bottomFooterLinks.length).toBe(3);
    bottomFooterLinks.map((link) => {
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "#");
    });
  });
});
