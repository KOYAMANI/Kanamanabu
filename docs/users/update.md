# Create User's Account

Update the Account of the Authenticated User if and only if they are Owner.

**URL** : `api/users/`

**Method** : `POST`

**Auth required** : YES

**Data example** All fields are optional.

```json
{
  "name": "newUserName"
}
```

## Success Response

**Condition** : If everything is OK.

**Code** : `200 OK`

**Content example**

```json
{
  "_id": "6239b8f6c1049aed4702",
  "name": "newUserName",
  "email": "example@example.com",
  "pic": "https://url.of.profile-pic",
  "token": "eykpXVCJ9.eyJpZCI6IjYyMzliOGY1MDA3MCwiZ"
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