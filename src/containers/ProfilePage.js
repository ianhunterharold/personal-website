import React from 'react';
import { Component } from 'react';
import Main from './Main.js';
import SideBar from '../components/SideBar.js';
import { Grid, Image } from 'semantic-ui-react';


class ProfilePage extends Component{

  render(){

    return(
      <div>
  
    <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column>
          "Words inside of the first column"
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
        </Grid.Column>  
      </Grid.Row>


    </Grid>
      </div>
    )
  }
}

export default ProfilePage;