import { configureStore } from "@reduxjs/toolkit";

import users from "./usersSlice";

// const combinedReducer = combineReducers({
//   counter,
//   users,
// });

export const store = configureStore({
  reducer: {
    user: users,
  },
});

// const masterReducer = (state, action) => {
//   if (action.type === HYDRATE) {
//     console.log("users are", action.payload.users.users);
//     const nextState = {
//       ...state, // use previous state
//       counter: {
//         count: state.counter.count + action.payload.counter.count,
//       },
//       users: {
//         users: [...state.users.users, ...action.payload.users.users],
//       },
//     };
//     return nextState;
//   } else {
//     return combinedReducer(state, action);
//   }
// };

// export const makeStore = () =>
//   configureStore({
//     reducer: masterReducer,
//   });

// export const wrapper = createWrapper(makeStore, { debug: true });
