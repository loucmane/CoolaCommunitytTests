describe("Testing the links to the other html-files work", () => {

    it("Link validation which goes to the right path", () => {
       
        cy.visit("/start.html");
        cy.url().should('include', '/start.html');


        cy.get("ul").children();
        //Check the first element in the list and click on the link
        cy.get("li a:first").click();
        //Check that the right url was linked
        cy.url().should('include', '/guestbook.html');
        cy.get("h3 a").click();

        cy.get("ul").children();
        //Check the second eleement in the ul list
        cy.get("li").eq(1).click();
        //Check that the right url was linked
        cy.url().should('include', '/presentation.html');
        cy.get("h3 a").click();

        //Check the last element in the ul list
        cy.get("ul").children();
        cy.get("li a:last").click();

        cy.go("back").end();   
        
    });

});