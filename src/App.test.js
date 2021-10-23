import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Home from "./Home";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('renders Main app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Youtube Search/i);
  expect(linkElement).toBeInTheDocument();
  const input = screen.getByRole('textbox');
  expect(input).toBeVisible();

});

test('loads home component and search videos', async () => {
  act(() => {
    render(<Home />, container);
  });
  let linkElement = screen.getByText(/Search Results/i);
  expect(linkElement).toBeInTheDocument();

  const button = screen.getByRole('button')
  const input = document.getElementById("video-search");
  expect(button).toBeEnabled();
  expect(button.innerHTML).toBe("Search");

  input.value = "Hey";
  expect(input.value).toBe("Hey");

  fireEvent.click(button);
  await waitFor(() => {
    const imageResults = screen.getAllByRole('img');
    expect(imageResults.length).toBeGreaterThan(0);
    expect(imageResults[0]).toBeVisible();
  }
  );
});
