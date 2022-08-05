import axios from "axios";

// You can use fetch or do it with axios

const instance = axios.create({
    baseURL: "http://localhost:3000/",
    //baseURL: "https://tiktok-backend-ziahub.herokuapp.com/",
});

export default instance;