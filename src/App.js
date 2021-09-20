import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import VideoPlayer from "./video-player/video-player.js";
import ErrorFallback from "./components/error-fallback";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <VideoPlayer />
      </ErrorBoundary>
    </div>
  );
};

export default App;
