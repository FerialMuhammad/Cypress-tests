/// <reference types="cypress" />

import { TodoPage } from "../page-objects/todo-page"

describe('Test tododmvc filters', () => {
    const todoPage = new TodoPage()
    before(() => {
        todoPage.navigate()
        todoPage.addTodo('learn pytest')
        todoPage.addTodo('learn python api')
        todoPage.addTodo('learn CI/CD')
        todoPage.completeTask(0)
        todoPage.completeTask(2)
    })

    it('should filter by active todos', () => {
        todoPage.filterByActive()
        todoPage.validateLengthOfList(1)
    })

    it('should filter by completed todos', () => {
        todoPage.filterByCompleted()
        todoPage.validateLengthOfList(2)
    })

    it('should filter by all todos', () => {
        todoPage.filterByAll()
        todoPage.validateLengthOfList(3)
    })
})