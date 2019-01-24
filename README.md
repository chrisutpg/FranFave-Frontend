# Auth0 with Vue and Vuex Example

Example app of integrating Auth0 with Vue and Vuex. The Auth0 documentation
fully describes integrating it with Vue but using props propagation and
emititng cutom events. Using a Vuex and keeping session in a Vuex store
is something which is more practical.

## Installation

Clone the repo and install dependencies with `npm install`.

You can run the app by executing `npm run serve`.

## Auth0 client

This app is setup to use my test client which may be removed in a future.
You probably want to open `src/lib/Authenticator.js` and change `WebAuth`
parameters in a constructor to ones from your client.