let userName = localStorage.getItem('userName');
let lastVisit = localStorage.getItem('lastVisit');

if (!userName) {
    userName = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя');
    localStorage.setItem('userName', userName);
    let date = new Date();
    localStorage.setItem('lastVisit', date.toString());
} else {
    alert('Добрый день, ${userName}! Давно не виделись. В последний раз вы были у нас ${lastVisit}')
    date = new Date()
    localStorage.setItem('lastVisit', date.toString())
}   