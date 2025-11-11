import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const role = localStorage.getItem("role"); // "admin" / "staff" / "user"

  return (
    <div style={{ width: "200px", borderRight: "1px solid #ccc", padding: "10px" }}>
      <h2>Dashboard</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        
        {/* Employee Management Section - Only for Admin */}
        {role === "admin" && (
          <>
            <li><strong>Employee Management</strong></li>
            <ul style={{ listStyle: "circle", paddingLeft: "20px" }}>
              <li><Link to="add-emp">Add Employee</Link></li>
              <li><Link to="view-emp">View Employees</Link></li>
              <li><Link to="attendance">Manage Attendance</Link></li>
              <li><Link to="leave">Manage Leave</Link></li>
            </ul>
          </>
        )}

        {/* Staff Dashboard */}
        {role === "staff" && (
          <>
            <li><Link to="attendance">My Attendance</Link></li>
            <li><Link to="leave">Apply Leave</Link></li>
          </>
        )}

        {/* Normal User Dashboard */}
        {role === "user" && (
          <>
            <li><Link to="profile">My Profile</Link></li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Sidebar;
