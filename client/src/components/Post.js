import React from 'react';
import { connect } from 'react-redux';
import { getPost } from '../actions/posts';

class Post extends React.Component {

  componentDidMount() {
    const { dispatch, match } = this.props
    dispatch(getPost(match.params.id));
  }

  render () {
    return (
      <div>
        {this.props.post.content}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { post: state.posts.post }
}

export default connect(mapStateToProps)(Post);
