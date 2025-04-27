// src/components/MenuBar.tsx
import { Link } from "react-router-dom";
import '../styles/MenuBar.css'; // Make sure to create a MenuBar CSS file

const MenuBar = () => {
  return (
    <div className="menu-bar">
      <ul>
        <li><Link to="/">About</Link></li>
        <li><Link to="/cv">CV</Link></li>
        {/* Add more links as necessary */}
      </ul>
    </div>
  );
};

export default MenuBar;
