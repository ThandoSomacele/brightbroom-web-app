type FormEvent = React.FormEvent<HTMLFormElement>;
type ClickEvent = React.MouseEvent<HTMLButtonElement>;
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
type SyntheticEvent = React.SyntheticEvent<EventTarget>;

interface ServiceObject {
  name: string;
  description: string;
  duration: number;
  icon: string;
  price: number;
  input_type: string;
  isDisabled: Boolean;
  initialValue: number;
}

export type { FormEvent, ClickEvent, ChangeEvent, SyntheticEvent, ServiceObject };
