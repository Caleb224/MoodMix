// import { clientId, clientSecret } from "@/constants/Credentials"; ===> for some reason, does not resolve path
import { clientId, clientSecret } from "../constants/Credentials";
import { Buffer } from "buffer"; // react-native wants explicit import

export async function getToken() {
  const tokenUrl = "https://accounts.spotify.com/api/token?" + new URLSearchParams({
    grant_type: "client_credentials",
  });

  const response = await fetch(tokenUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization":
        "Basic " +
        Buffer.from(clientId + ":" + clientSecret).toString("base64"),
    },
  });

  return await response.json();
}
