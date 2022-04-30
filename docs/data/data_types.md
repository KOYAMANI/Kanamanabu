## Data types

### Quiz

**About**

A data model for quizzes.
User gains score when selected item in`answers` is equals to `correct`

**Data example**
```javascript
{
  question: {
    type: String,
    required; true
  }
  category:{
    type: String,
    required; true
  }
  subcategory:{
    type: String,
    required; true
  }
  answers: {
    type: Array,
    required; true
  }
  correct: {
    type: String,
    required; true
  }
}
```

### User

**About**

A data model for a user.

**Data example**
```javascript
{
    name: {
        type: String, 
            required; true
    }
    email: {
        type: String,
            required; true,
            unique; true
    }
    password: {
        type: String,
            required; true
    }
    isAdmin: {
        type: Boolean,
            required; true,
            default; false
    }
    pic: {
        type: String,
            required; true,
            default; "https://default_image.jpg"
    }
}
{
    timestamps: true
}
```

### Chapter

**About**

A data model for Learning Chapter contents.

**Data example**
```javascript
{
    title: {
        type: String,
            required; true,
            unique; true
    }
    category: {
        type: String,
            required; true
    }
    subcategory: {
        type: Array,
            required; true
    }
    desc: {
        type: String,
            required; true
    }
    imageUrl: {
        type: String
    }
}
```

### Achievement

**About**

A data model for User Achievements 
(e.g.; when a user got full score from vocabulary quiz, the user will get an achievement called "vocabulary master")

**Data example**
```javascript
{
    title: {
        type: String,
            required; true
    }
    _id: {
        type: mongoose.Schema.Types.ObjectId,
            required; true,
            ref; "User"
    }
}
{
    timestamps: true
}
```