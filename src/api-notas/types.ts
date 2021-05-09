import { TodoCollection } from "./notes/todoCollection"


export type Color = {
    color: 'red' | 'blue' | 'green' | 'yellow';
}

export type RequestType = {
  type: 'add' | 'update' | 'remove' | 'read' | 'list';
  user: string;
  title: string;
  body?: string;
  color?: Color;
}

export type ResponseType = {
  type: 'add' | 'update' | 'remove' | 'read' | 'list' | 'error';
  success: boolean;
  notes?: TodoCollection[];
}
