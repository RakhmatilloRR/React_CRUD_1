// import React, { useContext, useState } from "react";
// import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  // FormGroup,
  // Input,
  // Label,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
} from "reactstrap";
// import { GlobalContext } from "../context/GlobalState";

function Heading() {
  // const [fname, setFname] = useState("");
  // const { getUser } = useContext(GlobalContext);

  // const handleChange = (e) => {
  //   setFname(e.target.value)
  //   getUser(fname)
  // };
  return (
    <Navbar color="dark" dark>
      <NavbarBrand>Brand</NavbarBrand>
      {/* <FormGroup>
        <Label>Name</Label>
        <Input
          onChange={handleChange}
          value={fname}
          name="fname"
          type="text"
          placeholder="Enter User Name"
        />
      </FormGroup> */}
      <Nav>
        <NavItem>
          <Link to="/add" className="btn btn-primary">
            Add User
          </Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default Heading;
