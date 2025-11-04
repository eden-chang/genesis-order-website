export interface FormField {
  name: string;
  label: string;
  type: "text" | "textarea" | "select" | "email";
  required: boolean;
  placeholder?: string;
  options?: string[];
  validation?: (value: string) => string | null;
}

export interface FormState<T> {
  data: Partial<T>;
  errors: Partial<Record<keyof T, string>>;
  isSubmitting: boolean;
  isValid: boolean;
}
