import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { DarkModeContext } from "../DarkModeContext";
import ClaimCard from "../components/ClaimCard";

const mockContextValue = {
  darkMode: false,
};

describe("ClaimCard Component", () => {
  test("renders ClaimCard component with provided props", () => {
    const { getByText } = render(
      <DarkModeContext.Provider value={mockContextValue}>
        <MemoryRouter>
          <ClaimCard
            claimName="Test Claim"
            claimNumber="123456789"
            dateFiled="2023-12-01"
            applicationStatus="Received"
            rank="A"
          />
        </MemoryRouter>
      </DarkModeContext.Provider>
    );

    expect(getByText("Test Claim")).toBeInTheDocument();
    // Add assertions for other expected content based on your component's structure
  });


  test("renders in dark mode correctly", () => {
    const { getByText } = render(
      <DarkModeContext.Provider value={{ darkMode: true }}>
        <MemoryRouter>
          <ClaimCard
            claimName="Test Claim"
            claimNumber="123456789"
            dateFiled="2023-12-01"
            applicationStatus="Received"
            rank="A"
          />
        </MemoryRouter>
      </DarkModeContext.Provider>
    );

    const claimCard = getByText("Test Claim");
    expect(claimCard).toHaveClass("px-4 py-4 font-bold text-2xl");
    // Add more assertions for other expected dark mode styles
  });
});
