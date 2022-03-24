# Login

Used to collect a Token for a registered User.

**URL** : `api/users/login`

**Method** : `POST`

**Auth required** : NO

**Data example** All fields must be sent.

```json
{
  "email":"example@example.com",
  "password": "example_password"
}
```

## Success Response

**Condition** : If everything is OK.

**Code** : `200 OK`

**Content example**

```json
{
  "_id": "6239b8f6c1049aed4702",
  "name": "userName",
  "email": "example@example.com",
  "isAdmin": false,
  "pic": "https://url.of.profile-pic",
  "token": "eykpXVCJ9.eyJpZCI6IjYyMzliOGY1MDA3MCwiZ"
}
```

## Error Responses

**Condition** : If a username or password is wrong.

**Code** : `400 BAD REQUEST`

**Content**
```json
{
  "message": "Invalid Email or Password"
}
```