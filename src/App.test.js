import React from 'react';
import { render, screen, waitFor, within, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import mockData from './mockData';
import BlogPosts from './components/BlogPosts';
import App from './App';

beforeEach(() => {
  jest.spyOn(global,'fetch').mockResolvedValue({
      json:jest.fn().mockResolvedValue(mockData)
  })
});
describe('<App /> tests', () => {
  it("should show blog on the page", async () => {
      render(<App/>);
      await waitForElementToBeRemoved(()=> screen.queryByText(/Loading/i));
      mockData.forEach((d)=> expect(screen.getByText(d.title)).toBeInTheDocument());
      // expect(screen.getByText(/hello/i)).toBeInTheDocument();
  });
});