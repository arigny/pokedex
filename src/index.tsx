import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { persistCache, LocalStorageWrapper } from "apollo3-cache-persist";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const cache = new InMemoryCache();

function measureCacheSize() {
  const state = cache.extract();
  const size = new TextEncoder().encode(JSON.stringify(state)).length;
  console.log(
    `Cache size: ${size} bytes (${(size / 1024 / 1024).toFixed(2)} MB)`,
  );
  return size;
}

try {
  await persistCache({
    cache,
    storage: new LocalStorageWrapper(window.sessionStorage),
  });
  console.log("Caching succeeded");
  setTimeout(measureCacheSize, 500);
} catch (error) {
  console.warn(`Caching failed: ${error}`);
}

const client = new ApolloClient({
  uri: "https://beta.pokeapi.co/graphql/v1beta",
  cache,
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
