/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe("user auth test suite", () => {
    beforeEach(() => {
        cy.visit('https://qa-practice.netlify.app');
    })

    it("login with valid credentials", () =>{
       cy.login('admin@admin.com', 'admin123');
      //cy.get('#message').should('be.visible');
        //v1
        cy.get('#message').should('contain', 'admin@admin.com, you have successfully logged in!');
        //or v2
        cy.contains('admin@admin.com, you have successfully logged in!').should('be.visible');
    })

    it("login with invalid credentials", () =>{
        cy.login('admin@admin.com', 'parolaGresita');
        cy.get('#message').should('be.visible');
        cy.get('#message').should('contain', "Bad credentials! Please try again! Make sure that you've registered.");
        cy.contains("Bad credentials! Please try again! Make sure that you've registered.").should('be.visible');
    })

    it("register user", () =>{
        const randomLastName = faker.person.lastName();
        cy.get('#forms').click();
        cy.get('#register').click();
        cy.get('#firstName').type('Predefined value');
        //cy.pause();
        cy.get('#firstName').clear().type(faker.person.firstName());
        cy.get('#lastName').type(randomLastName);
        cy.get('#phone').type('0989876546');
        cy.get('#countries_dropdown_menu').select('Australia');
        cy.get("input[type='email']").type(randomLastName+"."+faker.internet.email({firstName: 'Jane'}));
        cy.get("input[name='password']").type(faker.internet.password(), {log: false});
        cy.get('#exampleCheck1').click();
        cy.get('button').contains('Register').click();
        cy.get('#message').should('be.visible');
        cy.get('#message').should('contain', "The account has been successfully created!");
        cy.contains("The account has been successfully created!").should('be.visible');
    });
});