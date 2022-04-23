import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { GlobalContext } from "../context/GlobalState";
function EditUser(props) {
  // const [name, setName] = useState("");
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    fname: "",
  });
  const { users, editUser } = useContext(GlobalContext);
  const currentUserId = useParams().id;

  useEffect(() => {
    let userId = currentUserId;
    // console.log(typeof userId);
    let selectedUser = users.find((user) => user.id === Number(userId));
    setSelectedUser(selectedUser);
  }, [currentUserId, users]);

  const handleChange = (e) => {
    setSelectedUser({...selectedUser, [e.target.name]: e.target.value})
  }
  return (
    <Form>
      <FormGroup>
        <Label>Name</Label>
        <Input
          onChange={handleChange}
          value={selectedUser.name}
          name="fname"
          type="text"
          placeholder="Enter User Name"
        />
      </FormGroup>
      <Link onClick={()=> {editUser(selectedUser)}}  to="/" className="btn bg-success ms-2">Edit Name</Link>
      <Link to="/" className="btn bg-danger ms-2">
        Cancel
      </Link>
    </Form>
  );
}

export default EditUser;
