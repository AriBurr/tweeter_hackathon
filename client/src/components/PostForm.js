import React from 'react';
import { connect } from 'react-redux';
import { addPost } from  '../actions/posts';
import { nextId } from '../actions/nextId';
import { Form, Input, TextArea, Button , Divider} from 'semantic-ui-react'

class PostForm extends React.Component {
  state = { title: '', body: '' };

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, body } = this.state;
    const { id, dispatch } = this.props;
    const post = { id, title, body };
    dispatch(addPost(post));
    dispatch(nextId());
    this.setState({ title: '', body: '' })
  }

  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          required
          name='title'
          label="Title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <Form.Input
          required
          name='body'
          label="Body"
          value={this.state.body}
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
