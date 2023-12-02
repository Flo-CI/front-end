import React from "react";
import { render } from "@testing-library/react";
import ClaimDashboardScreen from "./screens/ClaimDashboardScreen";

jest.mock("../DarkModeContext.js", () => ({
  DarkModeContext: {
    Provider: ({ children }) => children,
    Consumer: ({ children }) => children({ darkMode: true }), // Mocking a value for darkMode
  },
}));

describe("ClaimDashboard component", () => {
  test("renders dashboard with sections and claims", () => {
    const { getByText, getAllByText } = render(<ClaimDashboardScreen />);

    // Check if the dashboard header is rendered
    const dashboardHeader = getByText("Dashboard");
    expect(dashboardHeader).toBeInTheDocument();

    // Check if NewClaimButton is rendered
    const newClaimButton = getByText("New Claim");
    expect(newClaimButton).toBeInTheDocument();

    // Check if Current Claims section is rendered
    const currentClaimsHeader = getByText("Current Claims");
    expect(currentClaimsHeader).toBeInTheDocument();

    // Check if Past Claims section is rendered
    const pastClaimsHeader = getByText("Past Claims");
    expect(pastClaimsHeader).toBeInTheDocument();

    // Check if individual ClaimCards are rendered (adjust with your actual test data)
    const claimNames = [
      "Loss of Life Claim",
      "Life Insurance Claim",
      "Illness Claim",
    ];
    claimNames.forEach((claimName) => {
      const claimNameElements = getAllByText(claimName);
      expect(claimNameElements.length).toBeGreaterThan(0);
    });

    // Add more assertions based on your component's structure and content
  });
});
