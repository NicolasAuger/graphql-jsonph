import { getResourceByPath } from "../fetch"

export function getUsers() {
    return getResourceByPath("/users")
}

export function getUser(id: number) {
    return getResourceByPath(`/users/${id}`)
}
