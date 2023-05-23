import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://us-central1-aug-28c0f.cloudfunctions.net/api",
});

export default instance;

// http://127.0.0.1:4000/functions