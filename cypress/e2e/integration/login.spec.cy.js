

describe('Ingreso con credenciales correctas', () => {
  it('Ingresar con credenciales correctas', () => {
    cy.visit('/ingreso');
    cy.get('#username').type('usuario_valido');
    cy.get('#password').type('contraseña_valida');
    cy.get('#loginButton').click();
    cy.url().should('eq', '/inicio');
  });
});



describe('Ingreso con credenciales incorrectas', () => {
  it('Mostrar mensaje de error con credenciales incorrectas', () => {
    cy.visit('/ingreso');
    cy.get('#username').type('usuario_invalido');
    cy.get('#password').type('contraseña_invalida');
    cy.get('#loginButton').click();
    cy.get('.error-message').should('exist');
  });
});

