import axios from "axios";
export const GET_POSTS = "GET_POSTS";

export const getPosts = () => {

    return (dispatch) => { //permet d'envoyer au reducer

        return axios.get("http://localhost:3000/posts").then((res) => {//obtenir les données via l'url
        
            dispatch({ type: GET_POSTS, payload: res.data });
        });     
    }   
}