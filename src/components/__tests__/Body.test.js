import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "../Body";
import MOCK_DATA from "../mocks/restaurants.json";

global.fetch = jest.fn(() => {
  return Promise.resolve(() => {
    json: () => {
      return Promise.resolve(MOCK_DATA);
    };
  });
});

it("Should render Body component", () => {
  render(<Body />);
  //const searchInput = screen.getByTestId("searchText");
});
