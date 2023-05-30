/// <reference types="cypress" />

describe("file upload test suite", () => {
    beforeEach(() => {
        cy.visit('https://qa-practice.netlify.app');
    })

    it("file upload", () =>{
        const fileName = "images.jpg";
        cy.get('#file-upload-item').click();
        cy.get('input[type=file]').selectFile('cypress/fixtures/'+fileName);
        cy.get('button').contains('Submit').click();
        cy.contains(`You have successfully uploaded "${fileName}"`).should('be.visible');
    });
});