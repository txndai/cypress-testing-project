describe('working with inputs', () => {
    it('should load the login page', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
    });

    it('should fill in username', () => {
        cy.get('#user_login').as('username')
        cy.get('@username').clear()
        cy.get('@username').type('Some invalid value', {delay: 50})
    });

    it('should fill in password', () => {
        cy.get('#user_password').as('password')
        cy.get('@password').clear()
        cy.get('@password').type('Some invalid passowrd', {delay: 50})
    });

    it('should mark checkbox', () => {
        cy.get('input[type="checkbox"]').click()
    });

    it('should submit login form', () => {
        cy.contains('Sign in').click()
    });

    it('should display error message', () => {
        cy.get('.alert-error').should('be.visible')
    });
});