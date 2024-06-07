import axios from "axios";

const devServer = "http://localhost:3000";
const prodServer = "https://goaadventure.in";

export default axios.create({
  baseURL: devServer,
});
