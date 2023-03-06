import { render, screen } from "@testing-library/react";
import Home from "../src/pages/index";
import "@testing-library/jest-dom";
import { links } from "../src/data/links";

describe("Home", () => {
  it("renders a home component", () => {
    render(<Home />);

    links.forEach((link) => {
      const linkTitle = screen.getByText(link.title);
      expect(linkTitle).toBeInTheDocument();

      const linkUrl = screen.getByText(link.url.replace(/(^\w+:|^)\/\//, ""));
      expect(linkUrl).toHaveAttribute("href", link.url);
    });
  });
});
