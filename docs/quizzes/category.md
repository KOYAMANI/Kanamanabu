# Sort quizzes by category

Fetch list of quiz sorted by category from the database

**URL** : `api/quizzes/:category`

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
    "_id": "61dea7f63f37bd01c4d44acb",
    "question": "あ",
    "category": "hiragana",
    "subcategory": "a",
    "answers": [
      "a",
      "i",
      "u",
      "o"
    ],
    "correct": "a"
  },
  {
    "_id": "61dea9fcce9a833a7422fef7",
    "answers": [
      "a",
      "i",
      "u",
      "o"
    ],
    "category": "hiragana",
    "correct": "i",
    "question": "い",
    "subcategory": "a"
  },
  {
    "_id": "61dea9fcce9a833a7422fef8",
    "answers": [
      "a",
      "i",
      "u",
      "o"
    ],
    "category": "hiragana",
    "correct": "u",
    "question": "う",
    "subcategory": "a"
  },
  {
    "_id": "61dea9fcce9a833a7422fef9",
    "answers": [
      "a",
      "i",
      "u",
      "e"
    ],
    "category": "hiragana",
    "correct": "e",
    "question": "え",
    "subcategory": "a"
  },
  {
    "_id": "61dea9fcce9a833a7422fefa",
    "answers": [
      "a",
      "i",
      "u",
      "o"
    ],
    "category": "hiragana",
    "correct": "o",
    "question": "お",
    "subcategory": "a"
  }
]
```
