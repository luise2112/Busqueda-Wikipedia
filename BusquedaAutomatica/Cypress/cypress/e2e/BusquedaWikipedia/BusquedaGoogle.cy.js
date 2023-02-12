describe("Busqueda", () => {
  it("Buscar la palabra automation", () => {
    cy.visit("https://www.google.com/");
    cy.get('button').find('div').contains('Aceptar todo').click()
    cy.get('[title="Buscar"]').type(`Automatización{enter}`);
    cy.contains('[href*="wikipedia"]', 'Wikipedia', {timeout: 60000}).click()
    cy.origin('https://es.wikipedia.org/', () => {
    cy.contains('p', 'primer telar automatizado').should('contain.text', '1800').screenshot()
    
  
  })
  });
});
