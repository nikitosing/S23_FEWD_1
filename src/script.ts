type Email = string
type Link = string

const url1 : Link = 'https://fwd.innopolis.app/api/hw2?'
const url2 : Link = 'https://getxkcd.vercel.app/api/comic?'
const email : Email = 'n.pozdniakov@innopolis.university'

interface Comic {
  img: Link
  alt: string
  year: string
  month: string
  day: string
  safe_title: string
}

async function fetchId(email : Email) : Promise<number> {
  const params : URLSearchParams = new URLSearchParams();
  if (email) {
      params.append('email', email)
  }
  const response : Response = await fetch(url1 + params.toString())

  return response.json()
}

async function fetchImg(id : number) : Promise<Comic> {
  const params : URLSearchParams = new URLSearchParams()
  params.append('num', id.toString())
  let result : Response = await fetch(url2 + params.toString())

  return result.json()      
}

export async function fetchAndSetComic() : Promise<void> {
  let id : number = await fetchId(email)
  let result : Comic = await fetchImg(id)
  let img : HTMLImageElement = document.getElementById("xkcd") as HTMLImageElement

  img.setAttribute('src', result.img)
  img.setAttribute('alt', result.alt)

  let h2 : HTMLHeadingElement = document.getElementById("xkcd-title") as HTMLHeadingElement
  h2.innerText = result.safe_title

  let a : HTMLAnchorElement = document.getElementById("xkcd-date") as HTMLAnchorElement
  const event : Date = new Date(parseInt(result.year), parseInt(result.month) - 1, parseInt(result.day), 0, 0, 0)
  a.innerText = event.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

  let alt : HTMLAnchorElement = document.getElementById("xkcd-alt") as HTMLAnchorElement
  alt.innerText = result.alt
}