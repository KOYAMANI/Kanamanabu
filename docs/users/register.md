# Create User's Account

Create an Account for the authenticated User if an Account for that User does
not already exist. Each User can only have one Account.

**URL** : `api/users/`

**Method** : `POST`

**Auth required** : NO

**Data example** A field "pic" is an optional.

```json
{
  "name": "userName",
  "email":"example@example.com",
  "password": "example_password",
  "pic":"https://url.of.profile-pic"
}
```

## Success Response

**Condition** : If everything is OK and an Account didn't exist for this User.

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

**Condition** : If Account already exists for User.

**Code** : `400 BAD REQUEST`

**Content** 
```json
{
  "message": "User already exists"
}
```

### Or

**Condition** : If fields are missed.

**Code** : `400 BAD REQUEST`

**Content example**

```json
{
  "message": "User validation failed: email: Path `email` is required."
}
```