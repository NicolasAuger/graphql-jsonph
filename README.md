# Graphql-jsonph

A GraphQL implementation by fetching JSONPlaceholder API Rest (with typescript)

## Run

1. `npm run start`

2. Une fois le projet lancé, dans l'interface GraphQL, tester une requête GraphQL comme ci-dessous:

Cette requête GraphQL d'exemple permet de récupérer tous les utilisateurs, et l'id + title de tous leurs albums

```
{
    users {
        id,
        name,
        username,
        email,
        phone,
        website,
        albums {
            id,
            title
        }
    }
}
```

Celle ci permet de récupérer tous les utilisateurs, leurs albums, et toutes les photos de cet album

```
{
    users {
        id,
        name,
        username,
        email,
        phone,
        website,
        albums {
            id,
            title,
            photos {
                id,
                url,
                title,
                thumbnailUrl
            }
        }
    }
}
```
