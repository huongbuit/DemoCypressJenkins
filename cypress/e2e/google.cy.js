describe('Access Google', () => {
  it('should open Google homepage and verify title', () => {
    cy.visit('https://www.google.com');
    // Check that the title contains "Google"
    cy.title().should('include', 'Google');
  });
});
