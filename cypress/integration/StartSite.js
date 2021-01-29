describe("Testing the links to the other html-files work", () => {

    it("Link validation which goes to the right path", () => {
       
        cy.visit("/start.html");
        cy.url().should('include', '/start.html');


        cy.get("ul").children();
        //Check the first element in the list and click on the link
        cy.get("li a").eq(0).click();
        //Check that the right url was linked
        cy.url().should('include', '/guestbook.html');
        //The site has a link in a h3 tag so if the site is the right on e that is used to get back to test the remaining sites
        cy.get("h3 a").click();

        cy.get("ul").children();
        //Check the second eleement in the ul list
        cy.get("li a").eq(1).click();
        //Check that the right url was linked
        cy.url().should('include', '/presentation.html');
        //The site has a link in a h3 tag so if the site is the right on e that is used to get back to test the remaining sites
        cy.get("h3 a").click();

        cy.get("ul").children();
        //Check the last element in the ul list
        cy.get("li a").eq(2).click();

        cy.go("back").end();   
        
    });

});