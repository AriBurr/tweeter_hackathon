import React from 'react';
import { connect } from 'react-redux';
import { addComment } from '../actions/comments';
import {
  Button,
  Divider,
  Form,
  TextArea,
} from 'semantic-ui-react';


class CommentForm extends React.Component {
  state = { message: '' }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { message } = this.state;
    const { dispatch } = this.props;
    const comment = { message };
    this.props.dispatch(addComment(comment));
    this.setState({ message: '' })
  }

  render () {
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
}

export default connect()(CommentForm);
