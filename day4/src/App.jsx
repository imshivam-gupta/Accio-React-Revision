import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Home from './components/Home';
import CounterProvider from './contexts/CounterContext';
import ContextExample from './components/ContextExample';

function App() {

  const [posts,setPosts] = useState([]);

  useEffect(()=>fetchPosts(),[]);

  const deletePost = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res=>{
      console.log(res)
      fetchPosts()
    })
    .catch(err=>console.error('Error fetching data',err));
  }

  const updatePost = (id) => {

  }

  const fetchPosts = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>setPosts(res.data))
    .catch(err=>console.error('Error fetching data',err));
    //  await res.json() -> fetch
  }

  const createPost = () => {
    const newPost = {
      title: 'foo',
      body: 'bar',
      userId: 3000,
    }

    axios.post("https://jsonplaceholder.typicode.com/posts",newPost)
    .then(res=>{
      console.log(res);
      setPosts([res.data,...posts]);
    })
    .catch(err=>console.error('Error posting data',err));
  }

  return (
    // <>
    //   <h2>
    //     Api Data
    //   </h2>

    //   <button onClick={createPost}>Create Post</button>

    //   <ul>
    //     {posts.map((post,index)=>(
    //       <li key={index}>
    //         {post.title}
    //         <button onClick={()=>deletePost(post.id)}>Delete</button>
    //         <button onClick={()=>updatePost(post.id)}>Update</button>
    //       </li>
    //     ))}
    //   </ul>
    // </>

    // <>
    //   <Home />
    // </>

    <CounterProvider>
      <ContextExample />
    </CounterProvider>
  )
}

export default App
