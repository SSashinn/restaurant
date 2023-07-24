export default function addContact(){
    const container = document.getElementById('container');

    const main = document.createElement('main');
    main.id = 'main';

    container.appendChild(main);

    const content1 = document.createElement('div');
    content1.classList.add('content');
    main.appendChild(content1);

    const para = document.createElement('p');
    para.textContent = '+4497565544';
    para.classList.add('para');
    content1.appendChild(para);
}