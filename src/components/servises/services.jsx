const BASE_URL = 'https://pixabay.com/api?q='
const key = "25723466-237a46130ce218f798049a33b"


export default function fetchSerchQuery(query) {
  return (
  fetch(`${BASE_URL}${query}&page=1&key=${key}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => {
          if (response.ok) { return response.json() }
          return Promise.reject(new Error('Not found image'))
        })
  )
}





