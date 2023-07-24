export function addHeader(container) {
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
}

function addMain(container){
    const main = document.createElement('main');
    main.id  = 'main';
    container.appendChild(main);

    const mainHead = document.createElement('div');
    mainHead.classList.add('contentHead');
    mainHead.textContent = "Beary's Breakfast Bar";
    main.appendChild(mainHead);

    const content1 = document.createElement('div');
    content1.classList.add('content');
    main.appendChild(content1);

    const p1 = document.createElement('p');
    p1.classList.add('para');
    p1.textContent = "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again."
    content1.appendChild(p1);

    const content1H = document.createElement('h2');
    content1H.classList.add('head');
    content1H.textContent = 'Goldilocks';
    content1.appendChild(content1H);

    const content2 = document.createElement('div');
    content2.classList.add('content');
    main.appendChild(content2);

    const content2H = document.createElement('h2');
    content2H.classList.add('head');
    content2H.textContent = 'Hours';
    content2.appendChild(content2H);

    const p2 = document.createElement('p');
    p2.id = 'hours';
    p2.textContent = 'Sunday: 8am - 8pm\nMonday: 6am - 6pm\nTuesday: 6am - 6pm\nWednesday: 6am - 6pm\nThursday: 6am - 10pm\n                    Friday: 6am - 10pm\nSaturday: 8am - 10pm'
    content2.appendChild(p2);
    
    const content3 = document.createElement('div');
    content3.classList.add('content');
    main.appendChild(content3);

    const content3H = document.createElement('h2');
    content3H.classList.add('head');
    content3H.textContent = 'Location';
    content3.appendChild(content3H);    

    const p3 = document.createElement('p');
    p3.classList.add('para');
    p3.textContent = '123 Forest Drive, Forestville, Maine';
    content3.appendChild(p3);

}

export {addMain};