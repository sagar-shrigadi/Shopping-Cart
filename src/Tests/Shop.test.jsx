import { createMemoryRouter, RouterProvider } from "react-router";
import { describe, expect, it } from "vitest";
import { Routes } from "../Routes";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

const router = createMemoryRouter(Routes);

describe("Shop.jsx-header", () => {
  it("elements in header of Shop are present", async () => {
    render(<RouterProvider router={router} />);
    const user = userEvent.setup();

    const heroBtn = screen.getByRole("link", { name: "Shop Now" });
    await user.click(heroBtn); // navigate to shop page

    const backBtn = await screen.findByText("Back");
    const shopHeading = await screen.findByRole("heading", {
      name: "Shop Products",
    });
    const shopPara = await screen.findByText("Browse our Curated Collections");
    const filterBtn = await screen.findByText("Filter");
    const sortBtn = await screen.findByText("Sort");

    expect(backBtn).toBeInTheDocument();
    expect(shopHeading).toBeInTheDocument();
    expect(shopPara).toBeInTheDocument();
    expect(filterBtn).toBeInTheDocument();
    expect(sortBtn).toBeInTheDocument();
  });
});
