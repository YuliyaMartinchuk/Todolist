import {addTodoliststAC, todolistsReducer} from "./todolistsReducer";
import {tasksReducer} from "./tasksReducer";
import {AssocTaskType, TodolistType} from "../AppWithRedux";


test('ids should be equals', () => {
    const startTasksState: AssocTaskType = {}
    const startTodolistsState: TodolistType[] = []

    const action = addTodoliststAC('new todolist')

    const endTasksState = tasksReducer(startTasksState, action)
    const endTodolistsState = todolistsReducer(startTodolistsState, action)

    const keys = Object.keys(endTasksState)
    const idFromTasks = keys[0]
    const idFromTodolists = endTodolistsState[0].id

    expect(idFromTasks).toBe(action.payload.todolistId)
    expect(idFromTodolists).toBe(action.payload.todolistId)
})