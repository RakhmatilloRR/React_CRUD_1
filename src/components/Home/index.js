import React, { Component } from 'react';
import Heading from '../Heading';
import UserList from '../UserList';

class Home extends Component {
  render() {
    return (
      <div>
       <Heading/>
       <UserList/>
      </div>
    );
  }
}

export default Home;