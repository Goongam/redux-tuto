import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch, connect } from 'react-redux';
import { CounterContainer } from './CounterContainer';

interface IncreMentAction{
  payload: number,
}
export const counterSlice = createSlice({
  name:'counter',
  initialState: {number: 1},
  reducers: {
    plus: state => {
      state.number += 1
    },
    minus: state => {
      state.number -= 1
    },
    incrementByAmount: ( state, action:IncreMentAction ) => {
      state.number += action.payload
    }
  },
});

export const { plus, minus, incrementByAmount } = counterSlice.actions;

export type RootState = ReturnType<typeof store.getState>
//export type RootState = {count: {number: number}} 와 같음
export type AppDispatch = typeof store.dispatch



const store = configureStore({
  reducer: {
    count: counterSlice.reducer,
  }
})


function App() {

  // const number = useSelector<Record<string, number>>((state) => state.number);

  return (
    <Provider store={store}>
      <CounterContainer />
    </Provider>
  );
}

export default App;
