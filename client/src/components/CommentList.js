import React from 'react';
import { connect } from 'react-redux';
import { getComments } from '../actions/comments';

class CommentList extends React.Component {

  componentDidMount() {
    this.props.dispatch(getComments());
  }

  render () {
    return (
      <div>comment</div>
    )
  }
}

const mapStateToProps = (state) => {
  return { comments: state.comments }
}

export default connect(mapStateToProps)(CommentList);
