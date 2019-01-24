import auth0 from 'auth0-js'

export default class Authenticator {

    auth0 = new auth0.WebAuth({
      domain: 'franfave.auth0.com',
      clientID: '40CzUI9VCJJPY_LBBzJyOFVBPm8_kusU',
      redirectUri: 'http://localhost:8080/auth',
      // audience: 'https://morman.eu.auth0.com/userinfo',
      responseType: 'token id_token',
      scope: 'openid'
    })

  login () {
    this.auth0.popup.authorize({prompt: 'login'})
  }

  handleAuthentication () {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (err) return reject(err)

        resolve(authResult)
      })
    })
  }
}
