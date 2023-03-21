type Email = string;
type Link = string;

const url1: Link = 'https://fwd.innopolis.app/api/hw2?';
const url2: Link = 'https://getxkcd.vercel.app/api/comic?';
const email: Email = 'n.pozdniakov@innopolis.university';

interface Comic {
	img: Link;
	alt: string;
	year: string;
	month: string;
	day: string;
	safe_title: string;
}

export interface ComicProcessed {
	img: Link;
	alt: string;
	title: string;
	dateString: string;
}

async function fetchId(email: Email): Promise<number> {
	const params: URLSearchParams = new URLSearchParams();
	if (email) {
		params.append('email', email);
	}
	const response: Response = await fetch(url1 + params.toString());

	return response.json();
}

async function fetchImg(id: number): Promise<Comic> {
	const params: URLSearchParams = new URLSearchParams();
	params.append('num', id.toString());
	const result: Response = await fetch(url2 + params.toString());

	return result.json();
}

export async function fetchComic(): Promise<ComicProcessed> {
	const id: number = await fetchId(email);
	const result: Comic = await fetchImg(id);
	const event: Date = new Date(
		parseInt(result.year),
		parseInt(result.month) - 1,
		parseInt(result.day),
		0,
		0,
		0
	);

	return {
		img: result.img,
		alt: result.alt,
		title: result.safe_title,
		dateString: event.toLocaleDateString(undefined, {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})
	} as ComicProcessed;
}
