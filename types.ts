type FormEvent = React.FormEvent<HTMLFormElement>;
type ClickEvent = React.MouseEvent<HTMLButtonElement>;
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
type SyntheticEvent = React.SyntheticEvent<EventTarget>;

interface ServiceObject {
  name: string;
  description: string;
  hours: number;
  icon: string;
  price: number;
  input_type: string;
  isDisabled: Boolean;
  defaultRooms: number;
}

export type { FormEvent, ClickEvent, ChangeEvent, SyntheticEvent, ServiceObject };
