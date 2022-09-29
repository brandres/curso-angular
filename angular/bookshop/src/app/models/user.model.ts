import { FormControl } from '@angular/forms';
export class User {
  email?: string;
  username?: string;
  password?: string;
}

export type UserForm = {
  [key in keyof User]: FormControl<User[key] | null>;
}
