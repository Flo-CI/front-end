import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DocumentViewer from '../screens/DocumentViewer';
import 'intersection-observer';
describe('DocumentViewer component', () => {
  const fileURL = 'https://example.com/sample.pdf';

  test('renders with no file selected initially', () => {
    render(<DocumentViewer open={true} handleClose={() => {}} />);
    const noFileText = screen.getByText('No file is selected yet');
    expect(noFileText).toBeInTheDocument();
  });

  test('closes the dialog when Close button is clicked', () => {
    const handleClose = jest.fn();
    render(<DocumentViewer open={true} handleClose={handleClose} fileURL={fileURL} />);
    const closeButton = screen.getByRole('button', { name: 'Close' });
    userEvent.click(closeButton);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
