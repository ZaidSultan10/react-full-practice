// destructuring 

const data = [{
    id : 1,
    title : "Zaid",
    author : "me"
},{
    id : 2,
    title : "chris",
    author : "angel"
},{
    id : 3,
    title : "MAtt",
    author : "Henry"
}]

const getBook = (id) => {
    return data.find(d => d.id === id)
} 

const book = getBook(2)
console.log(book.title)