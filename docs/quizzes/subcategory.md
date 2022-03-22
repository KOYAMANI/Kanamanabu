# Sort quizzes by category and sub-category

Fetch list of quiz sorted by category and sub-category from the database

**URL** : `api/quizzes/:category/:subcategory`

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
    "_id": "61dea9fcce9a833a7422fefb",
    "answers": [
      "ka",
      "ki",
      "ku",
      "ko"
    ],
    "category": "hiragana",
    "correct": "ka",
    "question": "か",
    "subcategory": "k"
  },
  {
    "_id": "61dea9fdce9a833a7422fefc",
    "answers": [
      "ka",
      "ki",
      "ku",
      "ko"
    ],
    "category": "hiragana",
    "correct": "ki",
    "question": "き",
    "subcategory": "k"
  },
  {
    "_id": "61dea9fdce9a833a7422fefd",
    "answers": [
      "ka",
      "ki",
      "ku",
      "ko"
    ],
    "category": "hiragana",
    "correct": "ku",
    "question": "く",
    "subcategory": "k"
  },
  {
    "_id": "61dea9fdce9a833a7422fefe",
    "answers": [
      "ka",
      "ke",
      "ku",
      "ko"
    ],
    "category": "hiragana",
    "correct": "ke",
    "question": "け",
    "subcategory": "k"
  },
  {
    "_id": "61dea9fdce9a833a7422feff",
    "answers": [
      "ka",
      "ke",
      "ku",
      "ko"
    ],
    "category": "hiragana",
    "correct": "ko",
    "question": "こ",
    "subcategory": "k"
  }
]
```
