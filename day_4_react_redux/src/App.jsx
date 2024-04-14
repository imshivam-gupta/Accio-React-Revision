import './App.css'
import {Provider} from "react-redux";
import store from './store';
import PostsReducer from './components/PostsReduxExample';

function App() {

  return (
    <Provider store={store}>
      <PostsReducer />
    </Provider>
  )
}

export default App
