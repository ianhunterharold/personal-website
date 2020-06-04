import React from 'react';
import { Component } from 'react';
import Main from './Main.js';
import SideBar from '../components/SideBar.js';
import { Grid, Image } from 'semantic-ui-react';


class Profile extends Component{

  render(){
    return(
      <div>
      <Grid celled>
    <Grid.Row>
    {/* <Main/> */}
      <Grid.Column width={3}>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column width={13}>
        <Image src='/images/wireframe/centered-paragraph.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column width={10}>
        <Image src='/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column width={3}>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
     
      {/* <SideBar/> */}
      </div>
    )
  }
}

export default Profile;