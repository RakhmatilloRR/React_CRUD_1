export default function reducer(state, action) {
  // dob of state
  const { users } = state;
  // dob of action
  const { type, payload } = action;
  const { id, newUser, user, fname } = payload;

  switch (type) {
    case "create":
      return (state = { users: [...users, newUser] });
    case "read":
      users.forEach((user) => console.log(user.fname.toLowerCase()));
      return (state = { users: users.filter((user) => (user.fname.toLowerCase().includes(fname))) });
    case "update":
      const editedUser = user;
      const updatedUsers = users.map((user) =>
        user.id === editedUser.id ? editedUser : user
      );
      return (state = { users: updatedUsers });
    case "delete":
      return (state = { users: users.filter((user) => user.id !== id) });

    default:
      return state;
  }
}
