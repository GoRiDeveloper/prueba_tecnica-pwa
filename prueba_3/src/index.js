import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { Providers } from "./providers";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>
);
