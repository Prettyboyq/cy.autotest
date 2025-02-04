describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/');// вход на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

         cy.get('#mail').type('german@dolnikov.ru'); // введение валидного логина
         cy.get('#pass').type('iLoveqastudio1'); // введение валидного пароля
         cy.get('#loginButton').click(); // нажал на инпут войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверка, что авторизация показывает текст
         cy.get('#messageHeader').should('be.visible');// виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и виден пользователю
    })
})


it('Верный пароль и неверный логин', function () {
    cy.visit('https://login.qa.studio/');// вход на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

    cy.get('#mail').type('german@dolnikov.ru'); // введение валидного логина
    cy.get('#pass').type('iLoveqastudio111'); // введение невалидного пароль
    cy.get('#loginButton').click(); // нажал на инпут войти
    
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверка, что совпадает текст
    cy.get('#messageHeader').should('be.visible') // виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и виден пользователю
})


it('Проверка в логине @', function () {
    cy.visit('https://login.qa.studio/');// вход на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

    cy.get('#mail').type('germandolnikov.ru'); // введение невалидного логина
    cy.get('#pass').type('iLoveqastudio1'); // введение валидного пароля
    cy.get('#loginButton').click(); // нажал на инпут войти
    
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //проверка, что совпадат текст
    cy.get('#messageHeader').shoulnd('be.visible'); // виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и виден пользователю
})

it('Проверка восстановления пароля', function () {
    cy.visit('https://login.qa.studio/');// вход на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

    cy.get('#forgotEmailButton').click(); // Нажать восстановить пароль

    cy.get('#mailForgot').type('german@dolnikov.ru');// ввел почту для восстановления
    cy.get('#restoreEmailButton').click(); // Нажал отправить код

    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //проверка, на совпадение показывает текст
    cy.get('#messageHeader').should('be.visible'); // виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и виден пользователю
})
