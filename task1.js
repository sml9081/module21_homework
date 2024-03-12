const parser = new DOMParser();
const xmlString = `
    <list>
        <student>
            <name lang="en">
                <first>Ivan</first>
                <second>Ivanov</second>
            </name>
            <age>35</age>
            <prof>teacher</prof>
        </student>
        <student>
            <name lang="ru">
                <first>Петр</first>
                <second>Петров</second>
            </name>
            <age>58</age>
            <prof>driver</prof>
        </student>
    </list>
`;
const xmlDOM = parser.parseFromString(xmlString, 'text/xml');

// Получаем DOM-нод для первого студента
const listNode = xmlDOM.querySelector('list');
const studentNode = listNode.querySelector('student');
const studentNameNode = studentNode.querySelector('name');
const firstNameNode = studentNameNode.querySelector('first');
const secondNameNode = studentNameNode.querySelector('second');
const ageNode = studentNode.querySelector('age');
const profNode = studentNode.querySelector('prof');

// DOM-нод для второго студента
const SecondStudentNode = listNode.querySelector('student:last-of-type');
const SecondStudentNameNode = SecondStudentNode.querySelector('name');
const SecondStudentFirstNameNode = SecondStudentNameNode.querySelector('first');
const SecondStudentSecondNameNode = SecondStudentNameNode.querySelector('second');
const SecondStudentAgeNode = SecondStudentNode.querySelector('age');
const SecondStudentProfNode = SecondStudentNode.querySelector('prof');

// Получение данных из атрибутов
const FirstStudentLangAttr = studentNameNode.getAttribute('lang');
const SecondStudentLangAttr = SecondStudentNameNode.getAttribute('lang');

// Запись данных в результирующий объект
const result = {
    list: [
        {
            name: firstNameNode.textContent + ' ' + secondNameNode.textContent,
            age: ageNode.textContent,
            prof: profNode.textContent,
            lang: FirstStudentLangAttr
        },
        {
            name: SecondStudentFirstNameNode.textContent + ' ' + SecondStudentSecondNameNode.textContent,
            age: SecondStudentAgeNode.textContent,
            prof: SecondStudentProfNode.textContent,
            lang: SecondStudentLangAttr
        }
    ]
};

console.log('result', result);
