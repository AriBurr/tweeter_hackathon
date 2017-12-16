import React from 'react';
import { connect } from 'react-redux';
import { addPost } from  '../actions/posts';
import { nextId } from '../actions/nextId';
import { Form, Input, TextArea, Button , Divider} from 'semantic-ui-react'

class PostForm extends React.Component {
  state = { content: '' };

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { content } = this.state;
    const { id, dispatch } = this.props;
    const post = { id, content };
    dispatch(addPost(post));
    dispatch(nextId());
    this.setState({ content: '' })
  }

  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          required
          name='content'
          placeholder="What's happening?"
          value={this.state.content}
          control={TextArea}
          onChange={this.handleChange}
        />
      <Button className='ui yellow button' type='submit'>Create Post</Button>
      <Divider hidden />
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId }
}

export default connect(mapStateToProps)(PostForm);
