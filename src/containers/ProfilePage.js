import React from 'react';
import { Component } from 'react';
import { Grid,Image,Header,Divider,Icon,List,Card } from 'semantic-ui-react';
import cocoLocoPicture from '../images/cocoLocoPicture.png';
import profilePicture from '../images/profilePicture.jpg';
import zallWallPicture from '../images/zallWallPicture.png';
import chatAppPicture from '../images/chatAppPicture.jpg';
import dailyTarotParrotPicture from '../images/dailyTarotParrotPicture.png';


class ProfilePage extends Component{



  render(){

    return(
      <div>
        <Grid  columns={3} divided padded>
          <Grid.Row centered>
            <Grid.Column  columns={2} width={10} color={"white"} key={'white'} padded>
              {/* <Segment> */}
                <Header size="large">
                  <p>
                    Howdy, I'm Ian Hunter Harold
                    <br/>
                    <br/>
                    Full stack software developer, and ardent applied learner. JavaScript, React and React Native obsessed with the ability to learn novel technologies. Proven track record driving revenue through various SAAS roles. An amazing combination of sales interpersonal skills with technical know how.
                    <br/>
                    <br/>
                  </p>
                </Header>
            

            <Grid.Row columns={2} padded >
           
            <Header as='h3' style ={{textDecoration:'underline'}}>Projects</Header>
            <Card.Group style={{justifyContent: 'center'}}>
                <Card style={{margin: '30px'}}
                    href='https://apps.apple.com/tt/app/coco-loco-harvest-coconuts/id1495832332?ign-mpt=uo%3D2'
                    target='blank'
                  >
                    <Image src={cocoLocoPicture} size='small' centered/>
                    <Card.Content >
                      <Card.Header>Coco Loco - Harvest Coconuts</Card.Header>
                      <Card.Description>
                        Interactive gaming experience targeted at ages 4+ to pass the time. Collect coconuts, increase your count and relax in paradise! Globablly available on iOS and Play Store. 
                      </Card.Description>
                    </Card.Content>
                </Card>
        

                <Card 
                  style={{margin: '30px'}}
                  href='https://github.com/ianhunterharold/zall_wall_frontend'
                  target='blank'
                >
                  <Image src={zallWallPicture} size='medium' centered />
                  <Card.Content>
                    <Card.Header>Zall Wall</Card.Header>
                    <Card.Description>
                      Gamifies the social sphere in the workplace to increase involvement, perceptiveness and interactivity. Users can give each other karma notes, join or leave groups they like or dislike respectively, and share and update their bio section. 
                    </Card.Description>
                  </Card.Content>
              </Card>

              <Card
                style={{margin: '30px'}}
                href='https://github.com/kel29/chat-frontend'
                target='blank'
              >
                <Image src={chatAppPicture} size='small' centered />
                <Card.Content>
                  <Card.Header>Live Chat App</Card.Header>
                  <Card.Description>
                    Chat App is a topic based live communication tool. Users can join into any existing conversation topic or start their own. 
                  </Card.Description>
                </Card.Content>
              </Card>

              <Card
                style={{margin: '30px'}}
                href='https://github.com/ianhunterharold/daily_parrot_tarot'
                target='blank'
              >
                <Image src={dailyTarotParrotPicture} size='small' centered />
                <Card.Content>
                  <Card.Header>Daily Tarot Parrot Reading</Card.Header>
                  <Card.Description>
                    Users can read their daily tarot astrological forecast by downloading the app, asking a question and seeing what the universe has to offer.   
                  </Card.Description>
                </Card.Content>
              </Card>

          

              </Card.Group>

          </Grid.Row>
          </Grid.Column>
          
                      
          <Grid.Column color={'black'} key={'black'} textAlign="center" padded width={6} >
          
              <Image src={profilePicture} size='medium' circular centered />
              <br/>
              <br/>
              <Header as='h4' inverted color='grey'>
                <p className='profile-section'>
                Life long learner, JavaScript and React artificer and aspiring polyglot.
                </p>
              </Header>
              <br/>
              <br/>
              <p className='profile-section'>
                <Header as='h4' inverted color='grey'>
                  When I'm not working in a repository, I'm camping and rock climbing with my 
                  <a href="https://www.instagram.com/mirasol_sunflower/?hl=en" target='blank'> fur baby</a>.
                </Header>
              </p>
              <br/>
              <br/>
              <p className='profile-section'>
                <Header as='h4' inverted color='grey'>
                  Chaco Tan line enthusiast. 
                </Header>
              </p>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/> 
              <Divider/>
              <List  horizontal>
                <List.Item as='github'>
                <Icon name='github' name='github' size='big'
                  onClick={()=>window.open("https://github.com/ianhunterharold")}
                />
                </List.Item>
                <List.Item as='linkedin'>
                  <Icon name='linkedin square'name='linkedin' size='big'
                    onClick={()=> window.open("https://www.linkedin.com/in/ianhunterharold/")}
                  />  
                </List.Item>
                <List.Item as='mail'>
                  <Icon name='mail' name='mail' size='big' 
                    onClick={()=> window.open("mailto:ianhunterharold@gmail.com")}
                  />
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default ProfilePage;