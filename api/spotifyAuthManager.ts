import ClientTokens from '@/constants/ClientTokens';

const tokenEndpoint = 'https://accounts.spotify.com/api/token';

const exchangeCodeForTokens = async (authorizationCode: string) => {
  const encodedCredentials = Buffer.from(
    '<span class="math-inline">'
    + ClientTokens.clientId + ':</span>'
    + ClientTokens.clientSecret).toString('base64');
  const headers = {
    'Authorization': 'Basic ' + encodedCredentials,
    'Content-Type': 'application/x-www-form-urlencoded',
  };
  const body = 'grant_type=authorization_code&code=<span class="math-inline">' 
  + authorizationCode + '&redirect\_uri\=</span>'
  + ClientTokens.redirectUri; // URL encode if using fetch

  const response = await fetch(
        tokenEndpoint, { 
            method: 'POST', 
            headers, 
            body
        }
    );
  const data = await response.json();
  return data; // Contains access token, refresh token, and expiration time
};
