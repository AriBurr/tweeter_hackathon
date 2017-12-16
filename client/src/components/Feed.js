import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPosts } from '../actions/feed';
import { getUsers } from '../actions/users';
import axios from 'axios';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Segment,
} from 'semantic-ui-react';


class Feed extends React.Component {

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
          <Link to={`/posts/${p.id}`}>Comments</Link>
          <Divider></Divider>
        </Segment>
      )
    });
  }

  displayUsers = () => {
    const { email } = this.props;

    return this.props.users.map( u => {
      return (
        <Segment basic>
          <p>{u.email}</p>
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
        User Feed
      </Header>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Segment raised>
                { this.displayPosts() }
              </Segment>
            </Grid.Column>
            <Grid.Column width={8}>
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

export default connect(mapStateToProps)(Feed);
