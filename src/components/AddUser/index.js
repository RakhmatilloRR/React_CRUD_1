import React, {  useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Input, Label } from "reactstrap";
// import { v4 } from "uuid";
import { GlobalContext } from "../context/GlobalState";

function AddUser(props) {
  const [fname, setfname] = useState("");
  const { addUser } = useContext(GlobalContext);

  let newUser = {
    id: Date.now(),
    fname: fname,
  };

  return (
    <>
      <Form>
        <FormGroup>
          <Label>Name</Label>
          <Input
            onChange={(e) => setfname(e.target.value)}
            value={fname}
            type="text"
            placeholder="Enter Name"
          />
        </FormGroup>
      </Form>
      <Link
        to="/"
        onClick={() => addUser(newUser)}
        className="btn bg-success ms-2"
      >
        Submit
      </Link>
      <Link to="/" className="btn bg-danger ms-2">
        Cancel
      </Link>
    </>
  );
}

export default AddUser;
