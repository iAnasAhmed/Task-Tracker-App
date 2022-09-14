export interface Task {
    id?: number; // ? added to be optional because it won't have an id until it added to a json server.
    text: string;
    day: string;
    reminder: boolean;
  }