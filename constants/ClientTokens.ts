import { makeRedirectUri } from "expo-auth-session";

export default {
    clientId: '050511b9bd93483c98c78bfed9f322dc',
    clientSecret: '63d0098b3c1a4476893cbdf756abdf8f',
    redirectUri: makeRedirectUri({
        path: 'callback'
    }),
}