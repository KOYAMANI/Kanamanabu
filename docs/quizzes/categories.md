# Show quiz category

Fetch list of quiz category from the database

**URL** : `api/quizzes/categories`

**Method** : `GET`

**Auth required** : NO

**Data example** This request doesn't have a body

## Success Response

**Condition** : If everything is OK.

**Code** : `200 OK`

**Content example**

```json
[
  {
    "_id": "62138e7ba256bb65f70e994b",
    "title": "はじめに",
    "category": "introduction",
    "subcategory": [],
    "desc": "はじめに introduction",
    "imageUrl": "https://res.cloudinary.com/dd7crphfe/image/upload/v1641585624/background/lgmhrfu23zxqcuvaha1n.png",
    "key": 0
  },
  {
    "_id": "61de88673f37bd01c4d44abc",
    "title": "ひらがな",
    "category": "hiragana",
    "subcategory": [
      "a-group",
      "ka-group"
    ],
    "desc": "ひらがな hiragana",
    "imageUrl": "https://res.cloudinary.com/dd7crphfe/image/upload/v1645451068/background/wok33g3kl5qaqkmnffh6.png",
    "key": 1
  },
  {
    "_id": "61de88673f37bd01c4d44abd",
    "title": "カタカナ",
    "category": "katakana",
    "subcategory": [
      "a-group",
      "ka-group"
    ],
    "desc": "カタカナ katakana",
    "imageUrl": "https://res.cloudinary.com/dd7crphfe/image/upload/v1641585624/background/xnn33z4bk3jzirwnc9jg.png",
    "key": 2
  },
  {
    "_id": "61de88673f37bd01c4d44abe",
    "title": "どうし",
    "category": "verb",
    "subcategory": [
      "life"
    ],
    "desc": "どうし verbs",
    "imageUrl": "https://res.cloudinary.com/dd7crphfe/image/upload/v1641585624/background/rcpbnzmhjxokm08ezltf.png",
    "key": 3
  },
  {
    "_id": "61f8442aa15c341a16433a4e",
    "title": "めいし",
    "category": "noun",
    "subcategory": [
      "animal"
    ],
    "desc": "めいし nouns",
    "imageUrl": "https://res.cloudinary.com/dd7crphfe/image/upload/v1641585624/background/potiilsrxl4enucvs9na.png",
    "key": 4
  }
]
```
