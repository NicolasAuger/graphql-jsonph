import { GraphQLID, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql"

import PhotoType from "../photos/type"
import UserType from "../users/type"

const AlbumType: GraphQLObjectType = new GraphQLObjectType({
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLID) },
        title: { type: GraphQLString },
        photos: {
            resolve: (parentValue, args, { loaders }) =>
            loaders.photos.load(parentValue.id),
            type: new GraphQLList(PhotoType),
        },
        user: {
            resolve: (parentValue, args, { loaders }) =>
            loaders.user.load(parentValue.userId),
            type: UserType,
        }
    }),
    name: "Album"
})

export default AlbumType
