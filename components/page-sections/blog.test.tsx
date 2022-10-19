import { render, screen } from "@testing-library/react";
import React from "react";
import Blog from "./blog";

it("should render the blog component", () => {
  render(
    <Blog
      blogs={[
        {
          createdAt: "2022-10-19T17:56:18.162Z",
          slug: "zigah",
          title: "Zigah: Send money effortlessly",
          description: "welcom to zigah",
          headerImage: {
            url: "https://zigah.co",
          },
          author: "Shedrack Ajaegbu",
          content: {
            html: "<h1>Sending money abroad can never be easier</h1>",
          },
          tag: "usd",
        },
      ]}
    />,
  );

  const blogElement = screen.getByRole("heading", {
    name: /Insights/i,
  });

  expect(blogElement).toBeInTheDocument();
});
