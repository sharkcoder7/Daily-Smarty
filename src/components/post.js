import React, { Component } from 'react';

class Post extends Component {
    render() {
        return (
            <li>
                {this.props.title}
            </li>
        )
    }
}

export default Post;