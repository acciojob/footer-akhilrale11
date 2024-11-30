it('should display all link boxes correctly', () => {
  // Visit the local server
  cy.visit("http://localhost:3000/");

  // Wait for the .link-boxes element to appear
  cy.get(".link-boxes", { timeout: 10000 }).should('be.visible').and('have.css', 'display', 'flex');

  // Check for presence of the contact number and other links
  cy.get(".link-boxes").contains("8879887262");
  cy.get(".link-boxes").contains("Home");
  cy.get(".link-boxes").contains("About");
  cy.get(".link-boxes").contains("Links");
  cy.get(".link-boxes").contains("Services");
  cy.get(".link-boxes").contains("Contact");
});
