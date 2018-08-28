import 'whatwg-fetch'


function getSteps (url, param) {
  // takes a url and a single parameter with which to query the url
  // and returns a promise
  return fetch(`${url}${param}`).then(results=>results.json())

}

export default getSteps
