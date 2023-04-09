import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Card from '../components/Card';
import LoadingSpinner from '../components/LoadingSpinner';

export default function ListPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const getData = () => {
    axios.get('http://localhost:3001/posts')
      .then(res => {
        setPosts(res.data);
        setLoading(false);
      })
  };
  useEffect(() => {
    getData();
  }, []);

  const btnDel = (e, id) => {
    e.stopPropagation();
    if (window.confirm('정말 삭제 하시겠습니까?')) {
      axios.delete(`http://localhost:3001/posts/${id}`)
        .then(() => {
          setPosts(prevPost => {
            return prevPost.filter(post => {
              return post.id !== id;
            })
          })
        })
    };
  };

  const loadingSpinner = () => {
    if (loading) {
      return (
        <LoadingSpinner />
      );
    };
    if (posts.length === 0) {
      return <span style={{color: 'blue'}}>저장된 데이터가 없습니다.</span>
    };
    return (
      posts.map(post => {
        return (
          <Card 
            key={post.id} 
            title={post.title} 
            onClick={() => history.push(`/blogs/${post.id}`)}
          >
            <button className="btn btn-danger btn-sm" onClick={e => btnDel(e, post.id)}>Delete</button>
          </Card>
        );
      })
    );
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        <h1>Blog List</h1>
        <Link to='/blogs/create' className='btn btn-success'>Create New</Link>
      </div>
      {loadingSpinner()}
    </>
  );
};