describe("Logout functionality", () => {
    it("Is able to log out", () => {
        
        cy.visit("/start");
        cy.get('a[href="/"]').click();
        cy.url().should("eq", Cypress.config().baseUrl).end();
    
    })


})