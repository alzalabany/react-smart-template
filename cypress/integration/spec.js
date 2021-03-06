// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

context('Example Cypress TodoMVC test', () => {
  beforeEach(() => {
    cy.visit('http://todomvc.com/examples/vue/');
  });

  it('adds 2 todos', function() {
    cy.get('.new-todo')
      .type('learn testing{enter}')
      .type('be cool{enter}');
    cy.get('.todo-list li').should('have.length', 2);
  });

  // more examples
  //
  // https://github.com/cypress-io/cypress-example-todomvc
  // https://github.com/cypress-io/cypress-example-kitchensink
  // https://on.cypress.io/writing-your-first-test
});
