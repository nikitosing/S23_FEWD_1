const url1 = 'https://fwd.innopolis.app/api/hw2?'
const url2 = 'https://getxkcd.vercel.app/api/comic?'

function fetchId(email) {
  const params = new URLSearchParams();
  if (email) {
      params.append('email', email)
  }
  return fetch(url1 + params.toString())
      .then((result) => result.json())
}

function fetchImg(id) {
  const params = new URLSearchParams()
  params.append('num', id)
  return fetch(url2 + params.toString())
      .then((result) => result.json())
}

let email = 'n.pozdniakov@innopolis.university'

fetchId(email).then(fetchImg).then((result) => {
  let img = document.getElementById("xkcd")
  img.setAttribute('src', result.img)
  img.setAttribute('alt', result.alt)

  let h2 = document.getElementById("xkcd-title")
  h2.innerText = result.safe_title

  let a = document.getElementById("xkcd-date")
  const event = new Date(Date.UTC(result.year, result.month - 1, result.day, 0, 0, 0))
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  a.innerText = event.toLocaleDateString(undefined, options)

  let alt = document.getElementById("xkcd-alt")
  alt.innerText = result.alt
})



