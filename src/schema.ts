import { GraphQLID, GraphQLList, GraphQLNonNull,  GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql"

import { getAlbums } from "./albums/service"
import AlbumType from "./albums/type"
import { getPhotos } from "./photos/service"
import PhotoType from "./photos/type"
import { getUsers } from "./users/service"
import UserType from "./users/type"

const QueryType = new GraphQLObjectType({
    fields: {
        album: {
            args: { id: { type: new GraphQLNonNull(GraphQLID) } },
            resolve: (parentValue, args, { loaders }) => loaders.album.load(args.id),
            type: AlbumType
        },
        albums: {
            resolve: (parentValue) => getAlbums(),
            type: new GraphQLList(AlbumType),
        },
        photo: {
            args: { id: { type: new GraphQLNonNull(GraphQLID) } },
            resolve: (parentValue, args, { loaders }) => loaders.photo.load(args.id),
            type: PhotoType
        },
        photos: {
            resolve: () => getPhotos(),
            type: new GraphQLList(PhotoType),
        },
        user: {
            args: { id: { type: new GraphQLNonNull(GraphQLID) } },
            resolve: (parentValue, args, { loaders }) => loaders.user.load(args.id),
            type: UserType
        },
        users: {
            resolve: () => getUsers(),
            type: new GraphQLList(UserType),
        },
    },
    name: "Query"
})


const schema = new GraphQLSchema({
    query: QueryType
})

export default schema
