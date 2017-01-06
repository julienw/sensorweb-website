const appId = '1812072225728842';
const redirectUrl = 'http://localhost:9000/webpack-dev-server/facebook.html';
const loginUrl =
  `https://www.facebook.com/v2.8/dialog/oauth?client_id=${encodeURIComponent(appId)}&redirect_uri=${encodeURIComponent(redirectUrl)}`

export default class FacebookAuthProvider {
  startLoginProcess() {
    window.open(loginUrl);
  }
}
