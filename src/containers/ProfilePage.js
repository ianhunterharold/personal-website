import React from 'react';
import { Component } from 'react';
import Main from './Main.js';
import SideBar from '../components/SideBar.js';
import { Grid,Image,Segment,Header,Button } from 'semantic-ui-react';
import cocoLocoPicture from '../images/cocoLocoPicture.png';
import profilePicture from '../images/profilePicture.jpg';


class ProfilePage extends Component{



  render(){

    return(
      <div>
  <Grid  columns={3} divided padded>
    <Grid.Row centered>
      <Grid.Column  columns={2} width={10} color={"white"} key={'white'} padded='horizonally'>
        <Segment>
          <Header size="large">
            Full stack software developer, and ardent applied learner. JavaScript, React and
            React Native obsessed with the ability to learn novel technologies. Proven track record driving revenue through various SAAS roles. An amazing combination of sales interpersonal skills with technical know how.
          </Header>
        </Segment>

        <Grid.Row colums={3}>
        
        <Grid.Column>

          <Segment>
          <Header as='h3' attached='top'>
          Coco Loco - Click the Fruit Game 
          </Header>
          <Button onClick={()=> window.open("https://apps.apple.com/tt/app/coco-loco-harvest-coconuts/id1495832332?ign-mpt=uo%3D2","blank") }>
          <Image
            src={cocoLocoPicture}
      
          size='medium' rounded>

          </Image>
          </Button>
            Interactive gaming experience targeted at ages 4+ to pass the time. Collect coconuts, increase your count and relax in paradise! Globablly available on iOS and playstore. Harnesses the power of React Native, async local storage, and xcode for complete accessibility on every mobile device. 
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
        <Image src={profilePicture} size='medium' circular centered />
      
      
      </Grid.Column>
    </Grid.Row>


  </Grid>
      </div>
    )
  }
}

export default ProfilePage;