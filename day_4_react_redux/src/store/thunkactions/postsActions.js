import axios from 'axios';
import * as ActionTypes from "../ActionTypes";

export const getPostsAction = () => async(dispatch) => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    dispatch({type: ActionTypes.POSTS_LOADING});
    try{
        const res = await axios.get(url);
        const postsList = res.data;
        dispatch({type:ActionTypes.POSTS_SUCCESS,payload:postsList})
    } catch(e){
        dispatch(
            {
                type: ActionTypes.POSTS_FAILURE,
                payload: e?.message ?? e.toString(),
            }
        )
    }
}