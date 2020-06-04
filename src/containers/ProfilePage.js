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
      <Grid.Column  columns={2} width={10} color={"white"} key={'white'} padded='horizonally'>
        <Segment>
          power statement
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </Segment>

        <Grid.Row colums={3}>
        
        <Grid.Column>
        <Segment>
          proj1
        </Segment>
          </Grid.Column>
          <Grid.Column>
        <Segment>
          pjr2
        </Segment>
          </Grid.Column>
          <Grid.Column>
        <Segment>
          prj3
        </Segment>
          </Grid.Column>

        
        </Grid.Row>

      </Grid.Column>
    
      <Grid.Column color={'black'} key={'black'} padded='vertically'>
        <Image src='https://i.imgur.com/sbGJcdW.jpg' />
      
      
      </Grid.Column>
    </Grid.Row>


  </Grid>
      </div>
    )
  }
}

export default ProfilePage;