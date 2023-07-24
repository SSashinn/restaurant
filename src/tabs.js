import { addMain } from "./home";
import remove from "./remove";
import addMenu from "./menu";
import addContact from "./contact";

export default function addHeader() {
    const container = document.querySelector('#container');
    const header = document.createElement('header');
    header.id = 'header';
    container.appendChild(header);

    const ul = document.createElement('ul');
    ul.id = 'ul';
    header.appendChild(ul)

    const li1 = document.createElement('li');
    li1.classList.add('tabs');
    li1.textContent = 'Home'; 
    ul.appendChild(li1);

    const li2 = document.createElement('li');
    li2.classList.add('tabs');
    li2.textContent = 'Menu'; 
    ul.appendChild(li2);

    const li3 = document.createElement('li');
    li3.classList.add('tabs');
    li3.textContent = 'Contact'; 
    ul.appendChild(li3);

    li1.addEventListener('click', () =>{
        remove();
        addMain();
    });

    li2.addEventListener('click', () =>{
        remove()
        addMenu();
    });

    li3.addEventListener('click', () =>{
        remove();
        addContact();
    });
}