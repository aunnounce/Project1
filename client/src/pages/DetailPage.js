import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

export default function DetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const getPost = (id) => {
    axios.get(`http://localhost:3001/posts/${id}`)
      .then(res => {
        setPost(res.data);
        setLoading(false);
      })
  };
  useEffect(() => {
    getPost(id);
  }, [id]);

  const prientdate = (stamp) => {
    return new Date().toLocaleString();
  };

  if (loading) {
    return <LoadingSpinner />
  };

  return (
    <>
      <h1>Detail page</h1>
      <h4 className='mt-5'>{post.title}</h4>
      <div className="text-muted">
        Create At : {prientdate(post.createAt)}
      </div>
      <hr />
      <div className="card" style={{width: '100%'}}>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">{post.body}</p>
        </div>
      </div>
      <button className="btn btn-primary btn-sm mt-3" onClick={() => history.goBack()}>Go Back</button>
    </>
  );
};