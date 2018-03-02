import { GraphQLID,  GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql"

import AlbumType from "../albums/type"

const UserType: GraphQLObjectType = new GraphQLObjectType({
    fields: () => ({
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
        website: { type: GraphQLString },
        albums: {
            resolve: (parentValue, args, { loaders }) =>
            loaders.albums.load(parentValue.id),
            type: new GraphQLList(AlbumType),
        }
    }),
    name: "User"
})

export default UserType
