import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, fetchPostsBYId, getPosts } from "../rtkit/slices/postSlice";

function PostsReducer(){
    
    const posts = useSelector((state)=>state.posts.posts);
    const dispatch = useDispatch();

    console.log("posts",posts)

    const fetchALlposts = async() => {
        // dispatch(getPosts());
        dispatch(fetchPostsBYId());
    }

    const addSOmePost = async() => {
        dispatch(createPost({id:7}));
    }

    useEffect(()=>{
        fetchALlposts();
    },[])

    return(
        <div>
            <h1> Posts from Redux Toolkit</h1>
            <button onClick={addSOmePost}>Add Post</button>
            {posts.map((post)=>{
                return (
                    <p key={post.id}>{post.title}</p>
                )
            })}
        </div>
    )
}

export default PostsReducer;