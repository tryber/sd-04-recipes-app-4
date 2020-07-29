describe('A cobertura de testes unitários deve ser de no mínimo 90%', () => {
  it('Verifica a cobertura de testes unitários', () => {
    cy.exec('npm run test-coverage -- --coverageReporters="json-summary" --testFailureExitCode=0');
    cy.readFile('coverage/coverage-summary.json').its('total.lines.pct').should('be.gte', 90.00);
  });
});
