# Authentication

To access the public cloud API, you must use Personnal Access Tokens (PAT).
PATs act on your behalf and will have the same set of permissions as you have.
The PATs can be tied to a team to access that team's resources.

## Use to a PAT?

When you send a request to the public cloud API, add the following header:

```http
Authorization: Bearer <PAT>
```

## How to create a PAT?

We currently do not have an interface to create PATs.
For the moment you will have to use our internal GraphQL API.

**Endpoint:** `POST` `https://api.caido.io/dashboard/graphql`
**Authentication:** `CAIDO_SESSION` cookie

```graphql
mutation CreatePat {
  createPat(
    input: {
      name: "<NAME>"
      teamId: "<ENTER TEAM ID>"
      expiresAt: "<OPTIONAL RFC3339 DATETIME>"
    }
  ) {
    pat {
      id
      token
    }
  }
}
```

## How to revoke a PAT?

We currently do not have an interface to revoke PATs.
For the moment you will have to use our internal GraphQL API.

**Endpoint:** `POST` `https://api.caido.io/dashboard/graphql`
**Authentication:** `CAIDO_SESSION` cookie

```graphql
mutation RevokePat {
  revokePat(id: "<PAT ID>") {
    pat {
      id
    }
  }
}
```
