// import { clientId, clientSecret } from "@/constants/Credentials"; ===> for some reason, does not resolve path
import axios from "axios";
import { clientId, clientSecret } from "../constants/Credentials";
import { Buffer } from "buffer";

export async function getToken() {
  const tokenUrl = "https://accounts.spotify.com/api/token";

  const responseAxios = await axios.post(tokenUrl, new URLSearchParams({
    grant_type: "client_credentials",
  }), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + Buffer.from(`${clientId}:${clientSecret}`).toString("base64"),
    },
  });


  return await responseAxios.data.access_token;
}
