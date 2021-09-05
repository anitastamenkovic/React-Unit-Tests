import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    //   ...noting

    //   Assert
    const helloWorldElem = screen.getByText("Hello World!");
    expect(helloWorldElem).toBeInTheDocument();
  });

  test("renders greeting message if the button was NOT clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    //   ...noting

    //   Assert
    const greetingMessage = screen.getByText("good to see you", {
      exact: false,
    });
    expect(greetingMessage).toBeInTheDocument();
  });

  test("renders changed message if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElem = screen.getByRole("button");
    userEvent.click(buttonElem);

    //   Assert
    const changedMessage = screen.getByText("Changed!");
    expect(changedMessage).toBeInTheDocument();
  });

  test("does NOT renders greeting message if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElem = screen.getByRole("button");
    userEvent.click(buttonElem);

    //   Assert
    const greetingMessage = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(greetingMessage).toBeNull();
  });
});
