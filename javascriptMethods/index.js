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

const {title, id, author} = getBook(1)
console.log(title)

// spread and rest operator

let arr = ["a", "b", "c", "d"]
let g = ["g"]

console.log('arr --',[...arr, ...g])

let obj = {
    time : "23",
    name : "zaid"
}
console.log({...obj, place:"lahore", name:"zaid new"})