import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantContainer, { withPromotedLabel } from "../RestaurantContainer";
import MOCK_DATA from "../mocks/restaurantData.json";

describe("RestaurantContainer component should pass test", () => {
  it("Should render RestaurantContainer", () => {
    render(<RestaurantContainer resList={MOCK_DATA} />);
    const restaurantName = screen.getByText("Pizza Hut");
    expect(restaurantName).toBeInTheDocument();
  });

  const PromotedComponent = withPromotedLabel(RestaurantContainer);
  it("Should render the HOC : withPromotedLabel", () => {
    render(<PromotedComponent resList={MOCK_DATA} />);
    const promotedLabel = screen.getByText("Promoted");
    expect(promotedLabel).toBeInTheDocument();
  });
});
