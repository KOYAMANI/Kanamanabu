# Show user's achievements

Give an achievement to a user(e.g. The user marked full score from vocabulary quiz) .

**URL** : `api/achievements`

**Method** : `GET`

**Auth required** : YES

**Data example** All fields must be sent.

```json
{
  "title":"The vocabulary wizard"
}
```

## Success Response

**Condition** : If everything is OK.

**Code** : `200 OK`

**Content example**

```json
{
  "title": "The vocabulary wizard",
  "_id": "6220ea0e024f9d070af67ec9"
}
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

### Or

**Condition** : If fields are missed.

**Code** : `500 Internal Server Error`

**Content example**

```json
{
  "message": "Achievement validation failed: title: Path `title` is required."
}
```