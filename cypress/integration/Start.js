describe('Test if links when logged in startpage direct you to the correct page', () => {
    beforeEach(() => {
        cy.visit("/start.html")
        cy.get('ul').children().should('have.length', 3)
    })

    it('clicks guestbook list item and navigates to guestbook', () => {
        cy.get("a[href='guestbook.html']").click()
        cy.url().should('contains','/guestbook')
        //cy.url().should()
    })

})

//cypress.config().baseUrl.end()