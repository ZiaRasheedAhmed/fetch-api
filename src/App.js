import BlogPosts from './components/BlogPosts';
import NewPost from './components/NewPost';
import { useEffect, useState } from 'react';
import { act } from '@testing-library/react';
import './App.css';
function App() {
  // Todo: Fetch blog posts from https://jsonplaceholder.typicode.com/posts (see documentation on https://jsonplaceholder.typicode.com/guide/)
  // Pass fetched posts to <BlogPost /> via props & output the posts in that component

  // 1.
  // const result = await fetch('https://jsonplaceholder.typicode.com/posts/')
  // .then((response) => response.json());

  // 2
  const[data,setData] = useState([]);
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    async function CallMyAPI() {
        const result = await fetch('https://jsonplaceholder.typicode.com/posts/')
        .then((response) => response.json());
        act(()=>{
          setData(result);
          setLoading(false);
        })
    }
    CallMyAPI();
    });
  return (
    <>
      <NewPost />
      {loading ? <p>Loading</p> :<BlogPosts data={data} />}
    </>
  );
}

export default App;
