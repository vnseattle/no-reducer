import state from '../redux-server-state';
import { endpoints } from '../endpoints';

// GET POSTS 
export const getPosts = () => state.get(endpoints.GET_POST())

// DELETE A POST
//export const deletePost = (id) => state.mPost(endpoints.DELETE_POST(id))