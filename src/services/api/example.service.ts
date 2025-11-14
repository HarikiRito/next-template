interface TodoItem {
  completed: boolean
  id: number
  title: string
}

export class ExampleService {
  static async getTodo(id: number): Promise<TodoItem> {
    return {
      completed: false,
      id,
      title: 'Do the dishes',
    }
  }

  static async getTodos(): Promise<TodoItem[]> {
    return [
      {
        completed: false,
        id: 1,
        title: 'Do the dishes',
      },
      {
        completed: true,
        id: 2,
        title: 'Buy groceries',
      },
      {
        completed: false,
        id: 3,
        title: 'Finish the project',
      },
    ]
  }

  static async updateTodo(item: TodoItem) {
    return {
      completed: item.completed,
      id: item.id,
      title: item.title,
    }
  }
}
