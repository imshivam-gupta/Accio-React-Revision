// import * as ActionTypes from "../ActionTypes";

// const initialState = {
//
// };

// function postReducer(state = initialState, action) {
//     console.log("hey there",action)
//   switch (action.type) {
//     case ActionTypes.GET_POSTS:
//         console.log("hello")
//       return {
//         posts:
//       };
//     default:
//         return initialState
//   }
// }

// export default postReducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts";
const postsarr = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
];

export const fetchPostsBYId=createAsyncThunk(
  'posts/fetch',async()=>{
    console.log('reached here0')
      const res = await axios.get(url);
      const postsList = res.data;
      console.log(postsList);
      return postsList;
  }
)

export const postsSlice = createSlice({
  name: "posts",
  initialState: {posts:[
    {
      userId: 1,
      id: 1,
      title: "Sample Post it was",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
  ]},
  reducers: {
    getPosts: (state) => {
      state.posts = postsarr
      // state.count = 1;
    },
    createPost: (state,action) => {
        state.posts = [
            ...state.posts,{
                    userId: 1,
                    id: action.payload.id,
                    title:
                      "New Post",
                    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            }
        ]
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchPostsBYId.fulfilled,(state,action)=>{
      state.posts = action.payload;
    })
  }
});


// {...state,loading:false}
export const {getPosts,createPost} = postsSlice.actions;
export default postsSlice.reducer;