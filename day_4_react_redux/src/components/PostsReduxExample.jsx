import {useDispatch,useSelector} from "react-redux";
import * as ActionTypes from "../store/ActionTypes";
import { useEffect } from "react";
import { getPostsAction } from "../store/thunkactions/postsActions";

function PostsReducer(){
    const {data,loading,error} = useSelector((state)=>state.posts);
    // console.log("posts",posts.posts)
    // console.log(x);
    const dispatch = useDispatch();
    // const posts = x.posts;

    const getPosts = () => {
        // console.log("arrived here");
        dispatch({type:ActionTypes.GET_POSTS});
    }

    const getPostsFromAPi = () => {
        dispatch(getPostsAction());
    }

    useEffect(()=>{
        // getPosts();
        getPostsFromAPi();
    },[])

    return(
        <div>
            <h1> Posts from Redux with thunk</h1>
            {data.map((post)=>{
                return (
                    <p key={post.id}>{post.title}</p>
                )
            })}
        </div>
    )
}

export default PostsReducer;