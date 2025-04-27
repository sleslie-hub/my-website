// App.tsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuBar from './pages/MenuBar'; // Import the MenuBar component
import HTMLRenderer from './HTMLRenderer'; // Import the HTMLRenderer component

const App = () => {
  return (
    <Router>
      <MenuBar /> {/* MenuBar is included at the top */}
      <div>
        <Routes>
          <Route path="/" element={<div>About</div>} />
          <Route path="/cv" element={<HTMLRenderer filePath="/CV.html" />} />
          {/* Add more routes as necessary */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
