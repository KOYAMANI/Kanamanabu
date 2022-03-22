# Show a contents of learning chapter

Fetch the contents of selected chapter from the database

**URL** : `api/chapters/:title`

**Method** : `GET`

**Auth required** : NO

**Data example** This request doesn't have a body

```json
{}
```

## Success Response

**Condition** : If everything is OK.

**Code** : `200 OK`

**Content example**

```json
[
  {
    "title": "hiragana",
    "consonant": "a",
    "letters": [
      "あ",
      "い",
      "う",
      "え",
      "お"
    ]
  },
  {
    "title": "hiragana",
    "consonant": "k",
    "letters": [
      "か",
      "き",
      "く",
      "け",
      "こ"
    ]
  },
  {
    "title": "hiragana",
    "consonant": "s",
    "letters": [
      "さ",
      "し",
      "す",
      "せ",
      "そ"
    ]
  },
  {
    "title": "hiragana",
    "consonant": "t",
    "letters": [
      "た",
      "ち",
      "つ",
      "て",
      "と"
    ]
  },
  {
    "title": "hiragana",
    "consonant": "n",
    "letters": [
      "な",
      "に",
      "ぬ",
      "ね",
      "の"
    ]
  },
  {
    "title": "hiragana",
    "consonant": "h",
    "letters": [
      "は",
      "ひ",
      "ふ",
      "へ",
      "ほ"
    ]
  },
  {
    "title": "hiragana",
    "consonant": "m",
    "letters": [
      "ま",
      "み",
      "む",
      "め",
      "も"
    ]
  },
  {
    "title": "hiragana",
    "consonant": "y",
    "letters": [
      "や",
      "",
      "ゆ",
      "",
      "よ"
    ]
  },
  {
    "title": "hiragana",
    "consonant": "r",
    "letters": [
      "ら",
      "り",
      "る",
      "れ",
      "ろ"
    ]
  },
  {
    "title": "hiragana",
    "consonant": "w",
    "letters": [
      "わ",
      "",
      "を",
      "",
      "ん"
    ]
  }
]
```
