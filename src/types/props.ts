import { ButtonStatus, LoaderSize, NotificationItem, SelectOptions } from "./vars";

// ui
export interface ButtonProps {
  status?: ButtonStatus;
  isDisabled?: boolean;
}

export interface InputProps {
  modelValue: string | number;
  placeholder: string | undefined;
}

export interface LoaderProps {
  size: LoaderSize;
  borderWidth: number;
}

export interface ModalProps {
  showModal: boolean;
}

export interface NotificationProps {
  notification: NotificationItem;
}

export interface SelectProps {
  modelValue: string;
  options: SelectOptions[];
}

// shared
export interface SharedPageProps {
  loading?: boolean;
  isEmpty?: boolean;
  pageName: string;
}
