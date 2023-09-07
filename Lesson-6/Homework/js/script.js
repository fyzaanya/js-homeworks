// Створити телефонну книгу

// 1) створити початковий клас Abonent, де зберігатимуться ім * я і номер

class Abonent {
    constructor(informations) {
        this.firstName = informations.firstName;
        this.lastName = informations.lastName;
        this.phoneNumber = informations.phoneNumber;
    }

    // 2) створити set який прийматиме телефон і номер

    set phoneNumber(newNumber) {
        this.number = newNumber;
    }

    // 3) створити get який виводитиме данні про абонента

    get abonent() {
        return `${this.lastName} ${this.firstName} - ${this.number}`;
    }
}

// 4) створити три різних юзери

const anna = new Abonent({
  firstName: "Анна",
  lastName: "Зикова",
  phoneNumber: "+380684567923",
});

const alex = new Abonent({
  firstName: "Олександр",
  lastName: "Шевченко",
  phoneNumber: "+380953844295",
});

const ira = new Abonent({
  firstName: "Ірина",
  lastName: "Гришко",
  phoneNumber: "+380634893720",
});

// 5) вивести данні

console.group(`Телефонна книга:`)
console.log(anna.abonent);
console.log(alex.abonent);
console.log(ira.abonent);
console.groupEnd();