import { generateUseMutationHook } from 'src/utils/reactQuery'

import { ExampleService } from '../example.service'

export const useExampleTodoMutation = generateUseMutationHook(ExampleService.updateTodo)
