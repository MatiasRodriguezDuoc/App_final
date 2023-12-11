// cypress/integration/forum.spec.js

describe('Agregar una publicación en el foro', () => {
  it('Agregar una publicación', () => {
    cy.visit('/foro');
    cy.get('#newPostButton').click();
    cy.get('#postTitle').type('Título de la publicación');
    cy.get('#postContent').type('Contenido de la publicación');
    cy.get('#submitPostButton').click();
    cy.get('.post').should('have.length.greaterThan', 0); // Ajusta según tu implementación
  });
});
// cypress/integration/forum.spec.js

describe('Eliminar la publicación en el foro', () => {
  it('Eliminar la publicación recién creada', () => {
    // Realiza el flujo de creación de una publicación antes de eliminarla
    cy.visit('/foro');
    cy.get('.post:first-child').find('.deleteButton').click();
    cy.get('.post').should('have.length', 0); // Ajusta según tu implementación
  });
});
