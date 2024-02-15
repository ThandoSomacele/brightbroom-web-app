type FormEvent = React.FormEvent<HTMLFormElement>;
type ClickEvent = React.MouseEvent<HTMLButtonElement>;
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
type SyntheticEvent = React.SyntheticEvent<EventTarget>;

type ServiceObject = {
  name: string;
  description: string;
  hours: number;
  icon: string;
  cost: number;
  input_type: string;
  isDisabled: Boolean;
  defaultRooms: number;
}

type BookingObject = {
  'totalHours': number;
  'price': number;
  'bedrooms'?: number;
  'bathrooms'?: number;
  'laundry & ironing'?: String;
  'oven'?: String;
  'fridge'?: String;
  'cabinets'?: String;
}

export type { FormEvent, ClickEvent, ChangeEvent, SyntheticEvent, ServiceObject, BookingObject };
