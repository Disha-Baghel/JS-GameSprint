const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.jpg'
    },
    {
        name: 'hamburger',
        img: 'images/hamburger.jpg'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'chocolate-shake',
        img: 'images/chocolateshake.jpg'
    },
    {
        name: 'pizza',
        img: 'images/pizza.jpg'
    },
    {
        name: 'icecream',
        img: 'images/icecream.jpg'
    },
    {
        name: 'fries',
        img: 'images/fries.jpg'
    },
    {
        name: 'hamburger',
        img: 'images/hamburger.jpg'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'chocolate-shake',
        img: 'images/chocolateshake.jpg'
    },
    {
        name: 'pizza',
        img: 'images/pizza.jpg'
    },
    {
        name: 'icecream',
        img: 'images/icecream.jpg'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')

function createBoard(){
    for (let rows = 0; rows < cardArray.length; rows++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.jpg')
        for(let columns = 0; columns < cardArray.length; columns++){
        
        
        card.setAttribute('data-id', columns)
        gridDisplay.append(card)
        }
    }
}
createBoard()