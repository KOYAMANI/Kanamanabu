const categories = [
    {
        _id: "1",
        title: 'ひらがな',
        category: 'hiragana',
        subcategory: ['あ　い　う　え　お', 'か　き　く　け　こ'],
        desc: 'ひらがな hiragana',
        imageUrl: 'https://res.cloudinary.com/dd7crphfe/image/upload/v1641585624/background/lgmhrfu23zxqcuvaha1n.png'
    },
    {
        _id: "2",
        title: 'カタカナ',
        category: 'katakana',
        subcategory: ['ア　イ　ウ　エ　オ'],
        desc: 'カタカナ katakana',  
        imageUrl: 'https://res.cloudinary.com/dd7crphfe/image/upload/v1641585624/background/xnn33z4bk3jzirwnc9jg.png'
    },
    {
        _id: "3",
        title: 'どうし',
        category: 'verb',
        subcategory: ['life'],
        desc: 'どうし verbs',
        imageUrl: 'https://res.cloudinary.com/dd7crphfe/image/upload/v1641585624/background/rcpbnzmhjxokm08ezltf.png'
    },
    {
        _id: "4",
        title: 'たんご',
        category: 'vocabulary',
        subcategory: ['animal'],
        desc: 'たんご vocabularies',
        imageUrl: 'https://res.cloudinary.com/dd7crphfe/image/upload/v1641585624/background/potiilsrxl4enucvs9na.png'
    },
]

module.exports = categories;