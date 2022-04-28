export class TodoPage {

    navigate() {
        cy.visit('http://todomvc-app-for-testing.surge.sh')
    }

    addTodo(todoText) {
        cy.get('.new-todo').type(todoText + '{enter}')
    }

    completeTask(lineNumber) {
        cy.get('.toggle').eq(lineNumber).click().should('be.checked')
    }

    validateTodoText(todoIndex, expectedTodoText) {
        cy.get(' label').eq(todoIndex).should('have.text', expectedTodoText)
    }

    validateTaskCompleted(lineNumber) {
        cy.contains('Clear completed').should('exist')
        cy.get('label').eq(lineNumber).should('have.css', 'text-decoration-line', 'line-through')
    }

    clearCompletedTasks() {
        cy.contains('Clear completed').click()
    }

    validateLengthOfList(expectedLength) {
        cy.get('label').should('have.length', expectedLength)
    }

    filterByCompleted() {
        cy.contains('Completed').click()
    }

    filterByActive() {
        cy.contains('Active').click()
    }
    filterByAll() {
        cy.contains('All').click()
    }
}