import * as DataLoader from "dataloader"

import { getAlbum, getAlbums } from "./albums/service"
import { getPhoto, getPhotos } from "./photos/service"
import { getUser } from "./users/service"

const loaders = {
    album: new DataLoader((keys) =>
        Promise.all(keys.map(getAlbum))
    ),
    albums: new DataLoader((keys) =>
        Promise.all(keys.map(getAlbums))
    ),
    photo: new DataLoader((keys) =>
        Promise.all(keys.map(getPhoto))
    ),
    photos: new DataLoader((keys) =>
        Promise.all(keys.map(getPhotos))
    ),
    user: new DataLoader((keys) =>
        Promise.all(keys.map(getUser))
    )
}

export default loaders
