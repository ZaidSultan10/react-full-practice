import cheesePizza from './cheese-pizza.jpg'
import chickenFajitaPizza from './chicken-fajita-pizza.png'
import chickenRanchPizza from './chicken-ranch-pizza.png'
import chickenTikkaPizza from './chicken-tikka-pizza.jpg'
import huawaiyanPizza from './huawaiyan-pizza.webp'
import pepperoniPizza from './pepperoni-pizza.jpg'

export const pizzaData = [{
    id : 1,
    name : `Pepperoni Pizza`,
    ingredients : `Hand-Crafted Bread, Cheese, Pepperoni`,
    price : 18,
    currency : "$",
    isSoldOut : false,
    image : pepperoniPizza
},{
    id : 2,
    name : `Chicken Tikka Pizza`,
    ingredients : `Hand-Crafted Bread, Cheese, Spicy Chicken, Onions, Red Bell Pepper`,
    price : 15,
    currency : "$",
    isSoldOut : false,
    image : chickenTikkaPizza
},{
    id : 3,
    name : `Supreme Pizza`,
    ingredients : `Hand-Crafted Bread, Cheese, Pepperoni, Grilled Chicken, Olives, Mushroom, Onions`,
    price : 20,
    currency : "$",
    isSoldOut : false,
    image : chickenFajitaPizza
},{
    id : 4,
    name : `Spicy Ranch Pizza`,
    ingredients : `Hand-Crafted Bread, Cheese, Ranch Sauce, Grilled Chicken, Olives, Mushroom, Onions`,
    price : 25,
    currency : "$",
    isSoldOut : false,
    image : chickenRanchPizza
},{
    id : 5,
    name : `Cheese Lovers Pizza`,
    ingredients : `Hand-Crafted Bread, Cheese`,
    price : 12,
    currency : "$",
    isSoldOut : false,
    image : cheesePizza
},{
    id : 6,
    name : `Huawaiyan Pizza`,
    ingredients : `Hand-Crafted Bread, Cheese, Pineapple, Grilled Chicken, Bacon, Mushroom, Onions`,
    price : 16,
    currency : "$",
    isSoldOut : false,
    image : huawaiyanPizza
}]