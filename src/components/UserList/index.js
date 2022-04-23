import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import { GlobalContext } from "../context/GlobalState";

function UserList(props) {
  const { users, removeUser } = useContext(GlobalContext);
  // setUs(users)
  console.log(users);

  return (
    <ListGroup className="mt-4">
      {
      users.map((user) => {
        
        const { id, fname } = user;
        return (
          <ListGroupItem className="d-flex align-items-center" key={id}>
            <strong>{fname}</strong>
            <div className="ms-auto">
              <Link className="btn btn-warning me-1" to={`/edit/${id}`}>
                Edit
              </Link>
              <Button onClick={() =>{ removeUser(id)}} color="danger">
                Delete
              </Button>
            </div>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
}

export default UserList;
