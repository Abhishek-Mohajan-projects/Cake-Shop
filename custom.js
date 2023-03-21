"use strict"

const navBar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {

    navBar.classList.toggle('active');

    searchForm.classList.remove('active');

    cartItem.classList.remove('active');
    
}

const cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {

    cartItem.classList.toggle('active');

    navBar.classList.remove('active');

    searchForm.classList.remove('active');

}

const searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {

    searchForm.classList.toggle('active');

    navBar.classList.remove('active');

    cartItem.classList.remove('active');
}

window.onscroll = () => {

    navBar.classList.remove('active');

    searchForm.classList.remove('active');

    cartItem.classList.remove('active');

}