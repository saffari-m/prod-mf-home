import React, { Err, Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";
const Header = React.lazy(() => import("header/Header"));

export default function Home() {
  return (
    <div>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
        </Suspense>
      </ErrorBoundary>
      Hi there, I'm Home App. <h1>Home.</h1>
    </div>
  );
}
