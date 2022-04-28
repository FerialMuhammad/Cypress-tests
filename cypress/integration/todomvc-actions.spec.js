/// <reference types="cypress" />

import { TodoPage } from "../page-objects/todo-page"

describe('Test tododmvc actions', () => {
    const todoPage = new TodoPage()

    before(() => {
        todoPage.navigate()
    })

    it('should add new todo to list', () => {
        todoPage.addTodo('learn python{enter}')
        todoPage.validateTodoText(0, 'learn python')
    })

    it('should strike through todos that are done', () => {
        todoPage.completeTask(0)
        todoPage.validateTaskCompleted(0)
    })

    it('should clear tasks when clicking clear completed', () => {
        todoPage.addTodo('learn cypress{enter}')
        todoPage.addTodo('learn pytest{enter}')
        todoPage.completeTask(0)
        todoPage.clearCompletedTasks()
        todoPage.validateLengthOfList(1)
    })
})
