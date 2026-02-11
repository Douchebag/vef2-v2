import { z } from 'zod';

export const TodoItemSchema = z.object({
  title: z.string().min(1).max(255),
})

export type TodoItem = z.infer<typeof TodoItemSchema>

export const addTodoSchema = z.object({
  title: TodoItemSchema,
})

export const updateTodoSchema = z.object({
  title: TodoItemSchema,
  finished: z.string().optional().transform((val) => val === 'on'),
});

