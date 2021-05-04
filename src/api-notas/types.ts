export type RequestType = {
    type: 'add' | 'update' | 'remove' | 'read' | 'list';
    title?: string;
    body?: string;
    color?: Color;
}

export type Color = {
    color?: 'red' | 'blue' | 'green' | 'yellow'
}
  
export type ResponseType = {
    type: 'add' | 'update' | 'remove' | 'read' | 'list';
    success: boolean;
    notes?: Note[];
}