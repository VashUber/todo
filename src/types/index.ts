export interface Task {
    id: string
    text: string
    complete: boolean
}

export interface TaskState {
    tasks: Task[]
}