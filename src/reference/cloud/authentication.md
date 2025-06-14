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

::: tip

<details>
<summary>To view the curl request, expand the following:</summary>

```bash
echo '{ "query":
  "mutation CreatePat($name: String!, $teamId: ID!) {
      createPat(
        input: {
          name: $name
          teamId: $teamId
        }
      ) {
        pat {
          id
          token
        }
      }
    }",
  "variables": {
    "name": "My PAT",
    "teamId": "01JXP5F0C40WYWSPQS9WAHSB9T"
  }
}' | tr -d '\n' | curl --silent \
https://api.caido.io/dashboard/graphql \
--header "Cookie: CAIDO_SESSION=<SESSION>" \
--header "Content-Type: application/json" \
--data @-
```

</details>
:::

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

::: tip

<details>
<summary>To view the curl request, expand the following:</summary>

```bash
echo '{ "query":
  "mutation RevokePat($id: ID!) {
    revokePat(id: $id) {
      pat {
        id
      }
    }
  }",
  "variables": {
    "id": "01JXP5F0C40WYWSPQS9WAHSB9T"
  }
}' | tr -d '\n' | curl --silent \
https://api.caido.io/dashboard/graphql \
--header "Cookie: CAIDO_SESSION=<SESSION>" \
--header "Content-Type: application/json" \
--data @-
```

</details>
:::
