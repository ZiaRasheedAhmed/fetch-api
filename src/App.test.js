import React from 'react';
import { render, screen, waitFor, within, waitForElementToBeRemoved, fireEvent, getByRole } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import mockData from './mockData';
import BlogPosts from './components/BlogPosts';
import App from './App';

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockData)
  })
});
describe('<App /> tests', () => {
  // Test 1:
  it("Fetched Data from Api", async () => {
    render(<App />);
    await waitForElementToBeRemoved(() => screen.queryByText(/Loading/i));
  });

  // Test 2:
  it("should show data on the page", async () => {
    render(<App />);
    await waitForElementToBeRemoved(() => screen.queryByText(/Loading/i));
    mockData.forEach((d) => expect(screen.getByText(d.title)).toBeInTheDocument());
    // expect(screen.getByText(/hello/i)).toBeInTheDocument();
  });

  // Test 3
  it("data posted on the given api", async () => {
    render(<App />);
    await waitFor(async () => {
      const result = await screen.findAllByRole('listitem')
      console.log(result.length)
    })
    const save = screen.getByText("Save");
    fireEvent(save, new MouseEvent('click', {
      bubbles: true,
      cancelable: true
    }))
    await waitFor(async () => {
      const result = await screen.findAllByRole('listitem')
      console.log(result.length)
    })
    // fireEvent()

    // expect(screen.getByText(/hello/i)).toBeInTheDocument();
    // Test 4:
  })

  it("SAVING...", async () => {
    render(<App />);
    userEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('button')).toHaveTextContent(/Saving.../);
  });
});