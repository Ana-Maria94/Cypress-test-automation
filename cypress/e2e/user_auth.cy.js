/// <reference types="cypress" />

describe("user auth test suite", () => {
    beforeEach(() => {
        cy.visit('https://qa-practice.netlify.app');
    })

    it("login with valid credentials", () =>{
        cy.get('#forms').click();
        cy.get('a[href="login.html"]').click();
        cy.get('#email').type('admin@admin.com');
        cy.get('#password').type('admin123');
        cy.get('#submitLoginBtn').click();
      //cy.get('#message').should('be.visible');
        //v1
        cy.get('#message').should('contain', 'admin@admin.com, you have successfully logged in!');
        //or v2
        cy.contains('admin@admin.com, you have successfully logged in!').should('be.visible');
    })

    it("login with invalid credentials", () =>{
        cy.get('#forms').click();
        cy.get('a[href="login.html"]').click();
        cy.get('#email').type('admin@admin.com');
        cy.get('#password').type('parolagresita');
        cy.get('#submitLoginBtn').click();
        cy.get('#message').should('be.visible');
        cy.get('#message').should('contain', "Bad credentials! Please try again! Make sure that you've registered.");
        cy.contains("Bad credentials! Please try again! Make sure that you've registered.").should('be.visible');
    })
})