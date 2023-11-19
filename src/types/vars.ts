export type ErrorType = "error" | "message";
export type ButtonStatus = "primary" | "danger";
export type LoaderSize = "inherit" | "auto" | number;

export interface NotificationItem {
  id: number;
  type: ErrorType;
  body: string;
}

export interface SelectOptions {
  value: string;
  title: string;
}

export interface NavItems {
  id: number;
  title: string;
  to: string;
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface NewPost {
  title: string;
  body: string;
}

export interface PostPage {
  id: number;
  userId?: number;
  title: string;
  body: string;
  user?: {
    id: number;
    name: string;
  };
}
