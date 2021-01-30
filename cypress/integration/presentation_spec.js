describe("Guest book", () => {

    it("contains less thn 3 letters", () => {

        cy.visit("/presentation.html");
       
        cy.url().should('eq', Cypress.config().baseUrl + '/presentation.html').end();
    });
});