import { API_KEY, endpoint, country } from "../config/config";

export async function services(category = 'general') {
    let articles = await fetch(`${endpoint}?country=${country}&category=${category}&language=en&apiKey=${API_KEY}`,
    )
    let result = await articles.json()
    articles = null;
    return result.articles;
}
{
    // method: 'GET',
    // mode: 'cors', // no-cors, *cors, same-origin
    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: 'same-origin', // include, *same-origin, omit
    // headers: {
    //     'x-api-key': API_KEY
    // },
    // redirect: 'follow', // manual, *follow, error
    // referrerPolicy: 'no-referrer',
}