

describe('should test amazon.com full page', () => {
    it('should visual test the amazon.com', () =>{
        cy.visit('https://amazon.com');
        cy.percySnapshot('amazon');
    })
})
