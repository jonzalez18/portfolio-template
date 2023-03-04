import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import CustomRouter from "./routes";
import { createRoot } from "react-dom/client";
function App() {
  return (
    <BrowserRouter>
      <CustomRouter />
    </BrowserRouter>
  );
}

const container = document.getElementById("app");
if (!container) throw new Error("Cannot find element");
const root = createRoot(container);
root.render(<App />);
