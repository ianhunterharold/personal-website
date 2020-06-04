import React from 'react';
import { Component } from 'react';
import Main from './Main.js';
import SideBar from '../components/SideBar.js';
import { Grid,Image,Segment } from 'semantic-ui-react';


class ProfilePage extends Component{

  render(){

    return(
      <div>
  <Grid  columns={3} divided padded>


  <Grid.Row centered>
    <Grid.Column width={10} color={"orange"} key={'orange'} padded='horizonally'>
    <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
    <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
    <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
    </Grid.Column>
    

    <Grid.Column color={'black'} key={'black'} padded='vertically'>
      <Segment>pic,name, quote
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
      
      
      </Segment>
    </Grid.Column>
 
  </Grid.Row>




  </Grid>
      </div>
    )
  }
}

export default ProfilePage;