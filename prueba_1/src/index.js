import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { SearchContextProvider } from "./context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <SearchContextProvider>
      <App />
    </SearchContextProvider>
  </StrictMode>
);
