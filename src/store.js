import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// Store :
// содержит состояние приложения (application state);
// предоставляет доступ к состоянию с помощью getState();
// предоставляет возможность обновления состояния с помощью dispatch(action);
// регистрирует слушателей (listeners) c помощью subscribe(listener).

export default function configureStore() {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
}