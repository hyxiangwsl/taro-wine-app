import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contextSlice } from "./contextSlice";


const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // ...错误处理
    console.error('保存错误')
  }
};

const rootReducer = combineReducers({
  context: contextSlice.reducer,
});

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    } else {
      return JSON.parse(serializedState);
    }
  } catch (err) {
    // ... 错误处理
    return undefined;
  }
};

const store = configureStore({
  reducer: rootReducer,
  // preloadedState: loadState(),
});

// store.subscribe(() => {
//   const state = store.getState();
//   saveState(state);
// });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
