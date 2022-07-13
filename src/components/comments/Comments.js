import { useState, useEffect } from 'react';
import CommentForm from './CommentForm';
import Comment from './Comment';
import {
  getComments as getCommentsApi,
  CreateComment as createCommentApi,
  updateComment as updateCommentApi,
  deleteComment as deleteCommentApi,
} from '../api';
import axios from 'axios';

const Comments = ({ commentsUrl, currentUserId }) => {
  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );
  const getReplies = (commentId) =>
    backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  const addComment = (text, parentId) => {
    createCommentApi(text, parentId, ip).then((comment) => {
      setBackendComments([comment, ...backendComments]);
      setActiveComment(null);
    });
  };

  const updateComment = (text, commentId) => {
    updateCommentApi(text).then(() => {
      const updatedBackendComments = backendComments.map((backendComment) => {
        if (backendComment.id === commentId) {
          return { ...backendComment, body: text };
        }
        return backendComment;
      });
      setBackendComments(updatedBackendComments);
      setActiveComment(null);
    });
  };
  const deleteComment = (commentId) => {
    if (window.confirm('Are you sure you want to remove comment?')) {
      deleteCommentApi().then(() => {
        const updatedBackendComments = backendComments.filter(
          (backendComment) => backendComment.id !== commentId
        );
        setBackendComments(updatedBackendComments);
      });
    }
  };
  const [userid, setId]= useState('');
  const [parentid, setparentId]= useState('');
  const [body, setBody]= useState('');
  const [username, setUsername]= useState('');
  const [createdAt, setcreatedAt]= useState('');
  const [ip, setIp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await axios.get('https://geolocation-db.com/json/');
        if (res.data) {
          localStorage.setItem('ip', res.data.IPv4);
          setLoading(false);
          const ipAddress = localStorage.getItem('ip');
          console.log(ipAddress);
          if (ipAddress) {
            setIp(ipAddress);
            setLoading(false);
          }
        }
      } catch (error) {

        console.log(error)
        setError(true);
        setLoading(false)
      }
    };
    getData();
    getCommentsApi().then((data) => {
      setBackendComments(data);
    });
  }, []);

  return (
    <div className='comments'>
      <h1 className='sub-title'>Section <strong className='comments-title'>under</strong> Development</h1>
      <div className='comment-form-title'>Write a Review</div>
      <div>
        {loading ? (
          <h1>Loading Data...</h1>
        ) : error ? (
          <button onClick={() => window.location.reload()} className='comment-form-button comment-form-cancel-button' style={{ marginRight: "7px" }}>
            Error. Ensure you have internet connection. Reload
          </button>
        ) : (
          <CommentForm submitLabel='Send' handleSubmit={addComment} />
        )}
      </div>
      <div className='comments-container'>
        {rootComments.map((rootComment) => (
          <Comment
            key={rootComment.id}
            comment={rootComment}
            replies={getReplies(rootComment.id)}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
            deleteComment={deleteComment}
            updateComment={updateComment}
            currentUserId={currentUserId}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
