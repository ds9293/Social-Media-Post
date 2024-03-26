import React, { useState } from 'react';
import Comment from './Comment';

function Post({ content }) {  // Destructure content from props
  const [likes, setLikes] = useState(0);

  function handleLike() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <h3>{content}</h3>  // Use content prop here
      <button onClick={handleLike}>Like</button>
      <p>Likes: {likes}</p>
      <p>Comments:</p>
      <Comment content="This is a test comment!" />
      <Comment content="This is another test comment!" />
      <Comment content="This is yet another test comment!" />
    </div>
  );
}

export default Post;
