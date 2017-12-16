import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPosts, deletePost } from '../actions/posts';
import { getUsers } from '../actions/users';
import PostForm from './PostForm';
import axios from 'axios';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Segment,
  Card,
  Image,
} from 'semantic-ui-react';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(getPosts());
    this.props.dispatch(getUsers());
  }
  displayPosts = () => {
    const { id, content, dispatch } = this.props;
    return this.props.posts.map( p => {
      return (
        <Segment basic>
          <p>{p.content}</p>
          <Button color='teal' as={Link} to={`/posts/${p.id}`}>Comments</Button>
          <Button color='red' onClick={() => this.props.dispatch(deletePost(p.id))}>Delete Post</Button>
          <Divider></Divider>
        </Segment>
      )
    });
  }
  displayUsers = () => {
    const { name } = this.props;
    return this.props.users.map( u => {
      return (
        <Segment basic>
          <p>{u.name}</p>
        </Segment>
      )
    });
  }
  render () {
    return (
      <div>
        <Header
          as='h1'
          fluid
          style={headerMainStyle}
          >My Dashboard
        </Header>
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column width={4}>
                <Segment raised>
                  <Card>
                    <Image src='https://slack-imgs.com/?c=1&url=http%3A%2F%2Fbartsimpsonpictures.squarelogic.net%2Fbart-simpson-01.gif' />
                    <Card.Content>
                      <Card.Header>
                        Bart
                      </Card.Header>
                    </Card.Content>
                  </Card>
                </Segment>
              </Grid.Column>
              <Grid.Column width={8}>
                { this.displayPosts() }
              </Grid.Column>
              <Grid.Column width={4}>
                <Segment raised>
                  <PostForm />
                </Segment>
                <Header
                  as='h1'
                  block inverted
                  style={headerStyle}
                >
                Who to follow
              </Header>
                { this.displayUsers() }
                <ul>
                  <li>Homer</li>
                  <li>Marge</li>
                  <li>Mr. Burns</li>
                  <li>Lisa</li>
                  <li>Ned Flanders</li>
                  <li>Apu</li>
                </ul>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    )
  }
}
const headerMainStyle = {
  height: '30px',
  color: 'white',
  backgroundColor: '#1da1f2'
}

const headerStyle = {
  margin: '3%',
  color: 'white',
  backgroundColor: '#1da1f2'
}

const mapStateToProps = (state) => {
  return { posts: state.posts.posts, users: state.users }
}
export default connect(mapStateToProps)(Dashboard);