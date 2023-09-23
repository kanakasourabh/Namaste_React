import { render, screen } from "@testing-library/react";
import RestaurentCard from "../RestaurentCard";
import RestoCardMock from "../mocks/RestoCardMock.json";
import "@testing-library/jest-dom";

it("Should render Restaurent card component with Mock data", () => {
  render(<RestaurentCard resData={RestoCardMock} />);

  const name = screen.getByText("Cafe Amudham");
  expect(name).toBeInTheDocument();
});
