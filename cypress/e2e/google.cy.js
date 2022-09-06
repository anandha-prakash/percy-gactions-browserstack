

describe('should test google.com full page', () => {
    it('should visual test the google.com', () =>{
        cy.visit('https://google.com');
        cy.percySnapshot('google');
    })
})
