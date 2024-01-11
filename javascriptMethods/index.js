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

const dataPure = null
console.log("data is ",dataPure ?? "Pure false")

const redArr = [{
    id: 1,
    value : 20,
},{
    id: 2,
    value : 30,
},{
    id: 3,
    value : 50,
}]

let finalValue = redArr.reduce((acc, val) => acc + val.value, 0)
console.log(finalValue)

const srArr = [{
    id: 3,
    value : 101,
},{
    id: 1,
    value : 30,
},{
    id: 2,
    value : 50,
}]

let sortArr = srArr.sort((a,b) => {return a.value - b.value})
console.log(sortArr)