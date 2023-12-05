import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FileCard from '../components/FileCard'; // Adjust the path as needed
import { DarkModeProvider } from '../DarkModeContext'; // Adjust the import path as needed



describe('FileCard Component', () => {
  it('renders FileCard component with correct file details in dark mode', () => {
    const fileName = 'TestFile';
    const fileDate = '2023-12-03';
    const fileStatus = 'Pending';

    const onClickMock = jest.fn();
    const { getByText } = render(
        <DarkModeProvider>
            <FileCard
            fileName={fileName}
            fileDate={fileDate}
            fileStatus={fileStatus}
            onClick={onClickMock}
            />
        </DarkModeProvider>
    );

    const fileNameElement = getByText(fileName);
    expect(fileNameElement).toBeInTheDocument();

    // Add more assertions based on your component structure and test requirements
    // For instance, you can check for the presence of other elements based on fileStatus, fileDate, etc.
  });

  it('fires onClick function when FileCard is clicked', () => {
    const onClickMock = jest.fn();
    const { container } = render(
        <DarkModeProvider>
            <FileCard
            fileName="TestFile"
            fileDate="2023-12-03"
            fileStatus="Pending"
            onClick={onClickMock}
            />
        </DarkModeProvider>
    );

    const fileCard = container.firstChild; // Assuming the first child is the clickable area
    fireEvent.click(fileCard);

    expect(onClickMock).toHaveBeenCalled();
  });

  // Add more tests for different scenarios as needed
});
