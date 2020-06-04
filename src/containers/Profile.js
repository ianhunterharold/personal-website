import React from 'react';
import { Component } from 'react';
import Main from './Main.js';
import SideBar from '../components/SideBar.js';
import { Grid, Image } from 'semantic-ui-react';


class Profile extends Component{

  render(){
    return(
      <div>
        "Im on the page in profile"
      <Main/>
      <SideBar/>
      </div>
    )
  }
}

export default Profile;