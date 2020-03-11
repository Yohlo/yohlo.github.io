import React from 'react';
import posts from '../posts';

export default ({ name }) => {
    let post = posts[name];

    return <div>
        <h1>{post.title}</h1>
        <p>{post.description}</p>

        {post.content}
    </div>
}