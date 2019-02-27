# How to Run this App
  * Clone repository.
  * Run `npm install` or `yarn install`.
  * Run `npm run dev` or `yarn run dev`.
  * Run `npm test` or `yarn test`.
  * Serve `index.html` using `live-server` or similar.

# Requirements
We need `node` & `npm`, as well as packages `live-server` and `eslint` installed _globally_. VSCode's `eslint` extension is recommended. Command line commands are run inside the project folder. This guide uses npm but should work the same using yarn.

# Objectives
  * Learn about HTTP and AJAX.
  * Learn to use the Network tab in Chrome Devtools.
  * Learn to do network GET requests from our JavaScript code.

# Steps
  * Adjust Chrome Devtools settings to make the most of the Network tab.
  * Load a website and break down the `Network` tab.
  * Set up a mock endpoint using `Mockable.io` that serves a person with an id, name and age.
  * Explain `Postman` interface and make a request to our fake endpoint to prove it works.
  * Set up a component to hold `error`, `loading` and `person` slices of state.
  * Build `setPerson`, `setError` methods.
  * Build a `fetchPerson` method that uses `fetch` to hit our endpoint. Focus on happy path.
  * Create UI to display the different states of `loading`, `error` and `person`.
  * Improve our methods to adjust `loading` and `error` states. Non-happy path.
  * Demonstrate using `jQuery` and `axios`.
  * Explain how to build a function that returns a Promise.