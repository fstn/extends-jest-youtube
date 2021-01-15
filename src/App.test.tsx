import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { App } from "./App";

describe("hogehoge", () => {
  describe("hogehoge", () => {
    it("expect extends", () => {
      expect(10).toBeWithinRange(0, 20);
    });

    it("sakesake", () => {
      const app = render(<App />);

      expect(app).h1Contains("Hello CodeSandbox");
      expect(app).h2Contains("Start editing");
    });
  });
});
