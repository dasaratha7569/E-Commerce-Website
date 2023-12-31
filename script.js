const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
{
    id: 1,
    title: "Air Force",
    price: 16000,
    colors: [
        {
        code: "black",
        img : "./nike air.webp",
    },
    {
        code: "darkblue",
        img: ".air2.webp",
    },
    ],
    },
    {
    id: 2,
    title: "Air Jordan",
    price: 12000,
    colors: [
    {
        code: "lightgray",
        img: "./main-square_b7b34011-cd26-4ee7-bbcf-8b2765caa0f8_x480.webp",
    },
    {
        code: "red",
        img: "./jordan2.png",
    },
    ],
    },
    {
    id: 3,
    title: "Blazer",
    price: 8900,
    colors: [
    {
        code: "lightgray",
        img: "images.jpeg",
    },
    {
        code: "black",
        img: "blazer2.png",
    },
    ],
    },
    {
    id: 4,
    title: "Crater",
    price: 10500,
    colors: [
    {
        code: "white",
        img: "./crater1.avif",
    },
    {
        code: "lightgray",
        img: "./crater2.jpeg",
    },
    ],
    },
    {
    id: 5,
    title: "Hippie",
    price: 8200,
    colors: [
    {
        code: "white",
        img: "./hippi.jpeg",
    },
    {
        code: "gray",
        img: "./hippi2.webp",
    },
    ],
},
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "Rs" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
        color.style.backgroundColor = choosenProduct.colors[index].code;
    });
});
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
});
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
        size.style.backgroundColor = "white";
        size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
});
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

close.addEventListener("click", () => {
    payment.style.display = "none";
});