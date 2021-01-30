describe("Guest book", () => {

    it("contains less than 3 letters", () => {

        cy.visit("/guestbook.html");
       
        cy.get('#guestbookInput').type("mm");
       
        cy.get("form").submit();
        cy.get("#errorMessage").contains("För kort meddelande!").end();
        

    });

    it("contains 3 letters", () => {

        cy.visit("/guestbook.html");
       
        cy.get('#guestbookInput').type("mmm");
        cy.get("form").submit();
        cy.get("#errorMessage").should("have.value", "").end()
        

    });

    it("contains more than 3 letters", () => {

        cy.visit("/guestbook.html");
       
        cy.get('#guestbookInput').type("mmmtt");
        cy.get("form").submit();
        cy.get("#errorMessage").should("have.value", "").end()
        

    });

    it("adds valid entries", () => {

        cy.visit("/guestbook.html");
       
        cy.get('#guestbookInput').type("mmm");
        cy.get("form").submit();
        cy.get('#entries').children("p").last().should('contain', "mmm");
        cy.get('#guestbookInput').type("ttt");
        cy.get("form").submit();
        cy.get('#entries').children("p").last().should('contain', "ttt").end();
        

    });

    it("adds items and removes one by one", () => {

        cy.visit("/guestbook.html");
       
        cy.get('#guestbookInput').type("mmm");
        cy.get("form").submit();
        cy.get('#entries').children("p").last().should('contain', "mmm");
        cy.get('#guestbookInput').type("ttt");
        cy.get("form").submit();
        cy.get('#entries').children("p").last().should('contain', "ttt");
        
        cy.get("#entries").children("p").eq(0).children("a").click();
        cy.get('#entries').children("p").first().should('not.contain', "mmm");
        cy.get("#entries").children("p").eq(0).children("a").click();
        cy.get("#entries").children("p").should('not.exist').end();
    });
})