# Show user's achievements

Fetch user's achievements (e.g. A user marked full score from vocabulary quiz) from the database

**URL** : `api/achievements`

**Method** : `GET`

**Auth required** : YES

**Data example** This request doesn't have a body

## Success Response

**Condition** : If everything is OK and the Account already have at least one achievement.

**Code** : `200 OK`

**Content example**

```json
[
    {
        "_id": "61bddb8dda5b3671c290",
        "title": "The title",
        "createdAt": "2022-01-13T16:34:57.445Z",
        "updatedAt": "2022-01-13T16:34:57.445Z",
        "__v": 0
    }
]
```

## Error Responses

**Condition** : If token registration is failed

**Code** : `401 UnAuthorized`

**Content**
```json
{
  "message": "Not authorized, token failed"
}
```
