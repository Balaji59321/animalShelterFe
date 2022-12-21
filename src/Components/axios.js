import axios from "axios";

const instance = axios.create({baseURL: "https://animalshelterbe.onrender.com"})

export default instance;