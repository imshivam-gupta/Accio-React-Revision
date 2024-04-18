import {connect, useDispatch,useSelector} from "react-redux";
import * as ActionTypes from "../store/ActionTypes";
import { useEffect } from "react";
import { getPostsAction } from "../store/thunkactions/postsActions";

function PostsReducer(props){
    // const {data,loading,error} = useSelector((state)=>state.posts);
    // console.log("posts",posts.posts)
    // console.log(x);
    // const dispatch = useDispatch();
    // const posts = x.posts;

    // const getPosts = () => {
    //     // console.log("arrived here");
    //     dispatch({type:ActionTypes.GET_POSTS});
    // }

    // const getPostsFromAPi = () => {
        
    // }

    console.log("compont mounted");

    useEffect(()=>{
        // getPosts();
        console.log("hi ehllo",props);
        props.getPostsFromAPi();
    },[])

    return(
        <div>
            <h1> Posts from Redux with thunk</h1>
            {props.data.map((post)=>{
                return (
                    <p key={post.id}>{post.title}</p>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log("hi");
    return{
        data:state.posts.data,
        x:2
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log("from map dispatch")
    return{
        getPosts: () => dispatch({type:ActionTypes.GET_POSTS}),
        getPostsFromAPi: () => dispatch(getPostsAction())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostsReducer);