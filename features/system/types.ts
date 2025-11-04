export interface SystemRule {
  id: string;
  category: string;
  title: string;
  content: string;
  examples?: string[];
}

export interface GameMechanic {
  name: string;
  description: string;
  rules: string[];
}
