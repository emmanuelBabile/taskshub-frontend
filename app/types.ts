export interface User {
    email: string;
    password: string;
}

export interface Project {
    id: number;
    name: string;
    description: string;
    created_at: Date;
    members: string[];
}

export interface Task {
    id: number;
    title: string;
    description: string;
    project: Project;
    assigned_to: User;
    status: string;
    priority: number;
    created_at: Date;
}

export interface Comment {
    id: number;
    task: Task;
    user: User;
    content: string;
    created_at: Date;
}
