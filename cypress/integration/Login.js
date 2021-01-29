describe("Login form", () => {

    it("Is able to sign in with the correct credentials", () => {

        cy.visit('/')
        cy.get('form')
        cy.get('#username').type('CoolUser').should('have.value', 'CoolUser');
        cy.get('#password').type('123123123').should('have.value', '123123123');
        cy.get('form').submit();
        cy.url().should('include', 'start').end(); 


    });

    it("Is not able to sign with the wrong credentials", () => {
        cy.visit('/')
        cy.get('form')
        cy.get('#username').type('CoolUser').should('have.value', 'CoolUser');
        cy.get('#password').type('1231231333')
        cy.get('form').submit();
        cy.contains('Fel användarnamn eller lösenord').end()
       

    });


})