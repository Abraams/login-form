export interface SelectOptions {
  key: number | string | null;
  value?: string | number;
  label?: string;
  placeholder?: boolean;
  default?: boolean;
  disabled?: boolean;
}

export interface LoginForm {
  name: string;
  email: string;
  phone: string;
  language: string;
}