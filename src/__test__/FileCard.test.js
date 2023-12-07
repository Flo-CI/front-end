import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { DarkModeContext } from "../DarkModeContext";
import FileCard from "../components/FileCard";

describe("FileCard Component (Button Click Tests)", () => {
  test("simulates button clicks and checks functionality", () => {
    const mockProps = {
      fileName: "Test File",
      fileDate: "2023-12-01",
      onClick: jest.fn(),
      fileExists: true,
      onSuccessUpload: jest.fn(),
      validationResults: {},
      setValidationResults: jest.fn(),
    };

    const mockContextValue = {
      darkMode: true, // Assuming dark mode is enabled
    };

    const { getByLabelText, getByText } = render(
      <DarkModeContext.Provider value={mockContextValue}>
        <FileCard {...mockProps} />
      </DarkModeContext.Provider>
    );

    // Simulate click on the 'Upload file' button
    const uploadButton = getByLabelText("Upload file");
    fireEvent.change(uploadButton, {
      target: {
        files: [new File(["(⌐□_□)"], "test-file.pdf", { type: "application/pdf" })],
      },
    });

    // Simulate click on the 'Validate File' button (if visible)
    if (mockProps.fileExists) {
      const validateFileButton = getByText("Validate File");
      fireEvent.click(validateFileButton);

    }

    // Simulate click on the 'View File PDF' button (if visible)
    if (mockProps.fileExists) {
      const viewFileButton = getByText("View File PDF");
      fireEvent.click(viewFileButton);

    }

  });
});
