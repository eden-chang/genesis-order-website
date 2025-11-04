export interface ApplicationForm {
  characterName: string;
  race: string;
  class: string;
  background: string;
  appearance: string;
  personality: string;
  history: string;
  goals: string;
  discord: string;
}

export interface FormFieldConfig {
  name: keyof ApplicationForm;
  label: string;
  type: "text" | "textarea" | "select";
  required: boolean;
  placeholder?: string;
  options?: string[];
}
