const { fakerPT_BR } = require('@faker-js/faker');

export function createUser() {
    return {
        name: fakerPT_BR.person.firstName(),
        email: fakerPT_BR.internet.email().toLowerCase()
    };
}

export function createAccount() {
    const bankAccounts = [
        "Itaú",
        "Banco do Brasil",
        "Nubank",
        "C6 Bank",
        "Santander",
        "Bradesco"
    ];

    // Seleciona aleatoriamente um banco
    const randomBank = bankAccounts[Math.floor(Math.random() * bankAccounts.length)];
    
    // Retorna o nome do banco
    return randomBank;
}