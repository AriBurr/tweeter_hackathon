import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPosts } from '../actions/posts';
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
} from 'semantic-ui-react';
import Bio from './Bio'


class Dashboard extends React.Component {

  componentDidMount() {
    this.props.dispatch(getPosts());
    this.props.dispatch(getUsers());
  }

  displayPosts = () => {
    const { id, content, dispatch, posts } = this.props;

    return posts.map( p => {
      return (
        <Segment basic>
          <p>{p.content}</p>
          <Link to={`/posts/${p.id}`}>View Post</Link>
          <Divider></Divider>
        </Segment>
      )
    });
  }

  displayUsers = () => {
    const { name, email } = this.props;

    return this.props.users.map( u => {
      return (
        <Segment basic>
          <p>{u.name} - {u.email}</p>
        </Segment>
      )
    });
  }

  render () {
    return (
      <Container>
        <Header
          as='h1'
          block inverted
          style={headerStyle}
        >
        User Dashboard
      </Header>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              { this.displayPosts() }
            </Grid.Column>
            <Grid.Column width={8}>
              <Segment raised>
                <PostForm />
              </Segment>
              <Header
                as='h1'
                block inverted
                style={headerStyle}
              >
              All Users
            </Header>
              { this.displayUsers() }
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

const headerStyle = {
  margin: '3%',
  color: 'cyan'
}

const mapStateToProps = (state) => {
  return { posts: state.posts.posts, users: state.users }
}

export default connect(mapStateToProps)(Dashboard);
