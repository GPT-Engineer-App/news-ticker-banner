import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import TickerControlPanel from "./pages/TickerControlPanel.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Index />
              <TickerControlPanel />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
