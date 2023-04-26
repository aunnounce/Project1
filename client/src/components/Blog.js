import { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Blog() {
  const [title, setTitle] = useState('');
  const [body, setbody] = useState('');
  const history = useHistory();
  const TopCursor = useRef();

  const saveData = async () => {
    await axios.post('/api/userData', {
      title,
      body,
      createAt: Date.now()
    })
    alert('저장이 완료 되었습니다.');
    setTitle('');
    setbody('');
    TopCursor.current.focus();
    history.push('/blogs');
  };
  return (
    <div className="container">
      <h1>Create a blog post</h1>
      <div className='mt-3'>
        <label className="form-label">Title</label>
        <input 
          className="form-control" 
          value={title}
          onChange={e => setTitle(e.target.value)}
          ref={TopCursor}
        />
      </div>
      <div className='mt-3'>
        <label className="form-label">Body</label>
        <textarea
          className="form-control" 
          value={body}
          onChange={e => setbody(e.target.value)}
          rows='15'
        />
      </div>
      <button className="btn btn-primary mt-3" onClick={saveData}>Save</button>
    </div>
  );
};