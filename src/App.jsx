import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const [isPageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    // Set the page as loaded after a short delay (adjust as needed)
    const timeoutId = setTimeout(() => {
      setPageLoaded(true);
    }, 500);

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
