export interface ActionWithPayload<T, P> {
  type: T;
  payload: P;
}

export interface Action<T> {
  type: T;
}
