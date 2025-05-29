// Navbar.jsx
import React from "react";
import {
  Button,
  Container,
  Nav,
  Navbar as BootstrapNavbar, // Renamed to avoid confusion
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login"; // Refresh to trigger UI update
  };
  return (
    <BootstrapNavbar // Use the renamed Bootstrap Navbar component
      expand="lg"
      fixed="top"
      bg="light"
      variant="dark"
      className="py-2"
      style={{ zIndex: 0 }}
    >
      <Container fluid>
        <div className="d-flex align-items-center">
          <span className="text-dark fs-4 me-auto"></span>
        </div>
        <Nav className="me-auto">
          <NavLink
            to="/dashboard"
            className="nav-link"
            style={{ color: "black" }}
          >
            Home
          </NavLink>

          <NavLink
            to="/administrators"
            className="nav-link"
            style={{ color: "black" }}
          >
            Administrators
          </NavLink>
          <NavLink
            to="/students"
            className="nav-link"
            style={{ color: "black" }}
          >
            Students
          </NavLink>
          <NavLink
            to="/dashboard/courses/babycourse"
            className="nav-link"
            style={{ color: "black" }}
          >
            Courses
          </NavLink>
        </Nav>
        <div className="ms-auto d-flex align-items-center">
          <Button variant="link" className="text-dark p-1 me-3">
            <i className="bi bi-question-circle"></i>
          </Button>
          <Button variant="link" className="text-dark p-1 me-3">
            <i className="bi bi-bell"></i>
          </Button>
          <div className="d-flex align-items-center">
            <span className="text-dark me-2">Andile</span>
            {/* {user?.name || "Admin"} */}
            <Button variant="link" className="text-dark p-0">
              <i className="bi bi-chevron-down"></i>
            </Button>
            <Button
              onClick={handleLogout}
              variant="link"
              className="text-dark p-0"
            >
              <i className="bi bi-box-arrow-right"></i> Logout
            </Button>
          </div>
        </div>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
