import React from 'react';
import { connect } from 'react-redux';
import { getPost } from '../actions/posts';
import { getComments } from '../actions/comments';
import { addComment } from '../actions/comments';
import {
  Button,
  Container,
  Divider,
  Form,
  Header,
  Segment,
  TextArea,
} from 'semantic-ui-react';

class Post extends React.Component {
  state = { message: '' }

  componentDidMount() {
    const { dispatch, match } = this.props
    dispatch(getPost(match.params.id));
    dispatch(getComments(match.params.id));
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { message } = this.state;
    const { dispatch, match } = this.props;
    const comment = { message };
    this.props.dispatch(addComment(comment, match.params.id));
    this.setState({ message: '' })
  }

  commentForm = () => {

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          required
          name='message'
          label="Comment"
          value={this.state.message}
          control={TextArea}
          onChange={this.handleChange}
        />
      <Button className='ui yellow button' type='submit'>Leave Comment</Button>
      <Divider hidden />
      </Form>
    )
  }

  displayComments = () => {
    const { comments } = this.props;
    return comments.map( c => {
      return (
        <Segment basic>
          <p>{c.message}</p>
        </Segment>
      )
    });
  }

  render () {
    return (
      <Container>
        <Divider hidden></Divider>
        <Segment>
          {this.props.post.content}
        </Segment>
        { this.commentForm() }
        { this.displayComments() }
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { post: state.posts.post, comments: state.comments.comments }
}

export default connect(mapStateToProps)(Post);
