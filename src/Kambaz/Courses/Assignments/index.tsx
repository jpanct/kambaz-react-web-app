import { Link } from "react-router-dom";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments"
             id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link to="/Kambaz/Courses/1234/Assignments/123"
                className="wd-assignment-link">
            A1 - ENV + HTML
          </Link>
          <br />
          Multiple Modules | Not available until May 6 at 12:00am |
          <br />
          Due May 13 at 11:59pm | 100 pts
        </li>
        <li className="wd-assignment-list-item">
          <Link to="/Kambaz/Courses/1234/Assignments/124"
                className="wd-assignment-link">
            A2 - CSS + BOOTSTRAP
          </Link>
          <br />
          Multiple Modules | Not available until May 13 at 12:00am |
          <br />
          Due May 20 at 11:59pm | 100 pts
        </li>
        <li className="wd-assignment-list-item">
          <Link to="/Kambaz/Courses/1234/Assignments/125"
                className="wd-assignment-link">
            A3 - JAVASCRIPT + REACT
          </Link>
          <br />
          Multiple Modules | Not available until May 20 at 12:00am |
          <br />
          Due May 27 at 11:59pm | 100 pts
        </li>
      </ul>
    </div>
  );
}