// import { clientId, clientSecret } from "@/constants/Credentials"; ===> for some reason, does not resolve path
import axios from "axios";
import { clientId, clientSecret } from "../constants/Credentials";
<<<<<<< HEAD
import { Buffer } from "buffer"; // react-native wants explicit import
=======
import { Buffer } from "buffer";
>>>>>>> refactor-test

export async function getToken() {
  const tokenUrl = "https://accounts.spotify.com/api/token?" + new URLSearchParams({
    grant_type: "client_credentials",
  });

<<<<<<< HEAD
  const response = await fetch(tokenUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization":
        "Basic " +
        Buffer.from(clientId + ":" + clientSecret).toString("base64"),
=======
  const responseAxios = await axios.post(tokenUrl, new URLSearchParams({
    grant_type: "client_credentials",
  }), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + Buffer.from(`${clientId}:${clientSecret}`).toString("base64"),
>>>>>>> refactor-test
    },
  });


  return await responseAxios.data.access_token;
}
