import { configureStore, Middleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from "./rootSaga";

import { rootReducer } from "./rootReducer";

export type RootState = ReturnType<typeof rootReducer>;

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// array of middlewares
// Conditionally enable logger
const middleWares = [
    process.env.NODE_ENV !== "production" && logger,
    sagaMiddleware,
  ].filter((middleware): middleware is Middleware => Boolean(middleware));

// root-reducer

export const store = configureStore({
  reducer: rootReducer,
  middleware: middleWares,
});

// run the root saga
sagaMiddleware.run(rootSaga)
