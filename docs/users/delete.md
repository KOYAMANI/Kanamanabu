# Delete An Account

Delete an existing user

**URL** : `api/users/delete`

**Method** : `DELETE`

**Auth required** : YES

**Data example** All fields must be sent.

```json
{
  "email":"example@example.com"
}
```

## Success Response

**Condition** : If everything is OK and an Account didn't exist for this User.

**Code** : `200 OK`

**Content example**

```json
{
  "_id": "6239b8f6c1049aed4702"
}
```

## Error Responses

**Condition** : If the account is not exists.

**Code** : `404 Not Found`

**Content**
```json
{
  "message": "User not found"
}
```