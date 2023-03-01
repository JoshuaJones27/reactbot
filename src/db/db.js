import pizzaImg from '../images/pizza.png';
import burgerImg from '../images/burger.png';
import cocaImg from '../images/coca.png';
import saladImg from '../images/salad.png';
import waterImg from '../images/water.png';
import iceCreamImg from '../images/icecream.png';
import kebabImg from '../images/kebab.png';

export function getData(){
    return [
        {title: 'Pizza', price: 17.99, img: pizzaImg},
        {title: 'Burger', price: 15, img: burgerImg},
        {title: 'Coca', price: 3.5, img: cocaImg},
        {title: 'Salad', price: 13.99, img: saladImg},
        {title: 'Water', price: 2.5, img: waterImg},
        {title: 'IceCream', price: 0.99, img: iceCreamImg},
        {title: 'Kebab', price: 13.99, img: kebabImg},
    ];
}