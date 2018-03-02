import fetch from "node-fetch"

export function getResourceByPath(path: string, method = "GET", body?: any) {
    return fetch(`https://jsonplaceholder.typicode.com${path}`)
        .then((res) => res.json())
        .catch((err) => console.error(err))
}
