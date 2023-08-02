import React, { useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

import "./PostCard.scss";

// two icons
import Like from "../../assets/icons/like.png";
import Comment from "../../assets/icons/comment.png";

const PostCard = ({
  post: { body, createdAt, id, username, likeCount, commentCount, likes },
}) => {
  const [like, setLike] = useState(false);
  //   const [comment, setComment] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };

  return (
    <div className="postcard">
      <div className="postcard__header">
        <h2 className="postcard__header-name">{username}</h2>
        <Link to={`/posts/${id}`}>
          <p className="postcard__header-time">
            {moment(createdAt).fromNow(true)}
          </p>
        </Link>
      </div>
      <div className="postcard__body">{body}</div>
      <div className="postcard__footer">
        <div className="postcard__footer-item">
          <img src={like ? Like : Comment} alt="like" onClick={handleLike} />
          <p>{likeCount}</p>
        </div>
        <div className="postcard__footer-item">
          <img src={Comment} alt="comment" />
          <p>{commentCount}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
