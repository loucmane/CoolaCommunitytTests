describe("Account registration form", () => {
    
    it("Username validation", () =>{
        cy.visit("/");
        cy.get("a").click();

        cy.url().should('eq', 'http://127.0.0.1:5500/register.html');

        cy.get("form");
        cy.get('input[name="username"]').type("co");
        cy.get("form").submit();
        cy.url().should('eq', 'http://127.0.0.1:5500/register.html?F%C3%B6r%20kort%20eller%20f%C3%B6r%20l%C3%A5ngt%20anv%C3%A4ndarnamn!');

        cy.get("form");
        cy.get('input[name="username"]').type("TheCoolestUser");
        cy.get("form").submit();
        cy.url().should('eq', 'http://127.0.0.1:5500/register.html?F%C3%B6r%20kort%20eller%20f%C3%B6r%20l%C3%A5ngt%20anv%C3%A4ndarnamn!').end();

    });

    it("Email validation", () => {

        cy.visit("/");
        cy.get("a").click();

        cy.url().should('eq', 'http://127.0.0.1:5500/register.html');

        cy.get("form");
        cy.get('input[name="username"]').type("CoolUser");
        cy.get('input[name="email"]').type("email@");
        cy.get("form").submit();
        cy.url().should('eq', 'http://127.0.0.1:5500/register.html?Felformatterad%20e-postadress!');

        cy.get("form");
        cy.get('input[name="username"]').type("CoolUser");
        cy.get('input[name="email"]').type("email@domain.");
        cy.get("form").submit();
        cy.url().should('eq', 'http://127.0.0.1:5500/register.html?Felformatterad%20e-postadress!');

        cy.get("form");
        cy.get('input[name="username"]').type("CoolUser");
        cy.get('input[name="email"]').type("a");
        cy.get("form").submit();
        cy.url().should('eq', 'http://127.0.0.1:5500/register.html?Felformatterad%20e-postadress!');

        cy.get("form");
        cy.get('input[name="username"]').type("CoolUser");
        cy.get('input[name="email"]').type(".se");
        cy.get("form").submit();
        cy.url().should('eq', 'http://127.0.0.1:5500/register.html?Felformatterad%20e-postadress!');

        cy.get("form");
        cy.get('input[name="username"]').type("CoolUser");
        cy.get('input[name="email"]').type("cooluser@£.se");
        cy.get("form").submit();
        cy.url().should('eq', 'http://127.0.0.1:5500/register.html?Felformatterad%20e-postadress!');
        
        cy.get("form");
        cy.get('input[name="username"]').type("CoolUser");
        cy.get('input[name="email"]').type("cooluser@email.[");
        cy.get("form").submit();
        cy.url().should('eq', 'http://127.0.0.1:5500/register.html?Felformatterad%20e-postadress!').end();

    });

    it("Password Validation", () => {
        cy.visit("/");
        cy.get("a").click();

        cy.url().should('eq', 'http://127.0.0.1:5500/register.html');

        cy.get("form");
        cy.get('input[name="username"]').type("CoolUser");
        cy.get('input[name="email"]').type("cooluser@email.se");
        cy.get('input[name="password"]').type("testpassword");
        cy.get("form").submit();
        cy.url().should('eq','http://127.0.0.1:5500/register.html?L%C3%B6senorden%20%C3%B6verensst%C3%A4mmer%20inte!');

        cy.get("form");
        cy.get('input[name="username"]').type("CoolUser");
        cy.get('input[name="email"]').type("cooluser@email.se");
        cy.get('input[name="password"]').type("testpassword");
        cy.get('input[name="passwordConfirm"]').type("notTheSamePassword");
        cy.get("form").submit();
        cy.url().should('eq','http://127.0.0.1:5500/register.html?L%C3%B6senorden%20%C3%B6verensst%C3%A4mmer%20inte!').end();

    });

    it("Sucessfull registration of an account", () => {
        cy.visit("/");
        cy.get("a").click();

        cy.url().should('eq', 'http://127.0.0.1:5500/register.html');

        cy.get("form");
        cy.get('input[name="username"]').type("CoolUser");
        cy.get('input[name="email"]').type("firstname@email.se");
        cy.get('input[name="password"]').type("testpassword");
        cy.get('input[name="passwordConfirm"]').type("testpassword");
        cy.get("form").submit();
        cy.url().should('eq', 'http://127.0.0.1:5500/register.html?%3Cmarquee%3EAnv%C3%A4daren%20registrerad!%20%3Ca%20href=%27/%27%3ELogga%20in%20h%C3%A4r!%3C/a%3E%3C/marquee%3E').end();

    });

});