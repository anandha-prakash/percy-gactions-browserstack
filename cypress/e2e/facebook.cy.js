

describe('should test facebook.com full page', () => {
    it('should visual test the facebook.com', () =>{
        cy.visit('https://facebook.com');
        cy.percySnapshot('facebook');
    })
})
