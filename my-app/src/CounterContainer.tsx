
import { useState } from 'react';
import {useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { RootState, plus, minus, incrementByAmount, AppDispatch } from './App';


export function CounterContainer(){
    // const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
    // const number = useAppSelector(state => state.count.number);
    const useAppDispatch: () => AppDispatch = useDispatch

    const number = useSelector((state: RootState) => state.count.number);

    const dispatch = useDispatch();

    const [input, setInput] = useState('');
    return (
        <>
            { number }
            <button onClick={()=>{
                dispatch(minus())
            }}>-</button>
            <button onClick={()=>{
                dispatch(plus())
            }}>+</button>

            <div>
                <input type="number" value={input} onChange={e=>{setInput(e.target.value)}}></input>
                <button onClick={()=>{dispatch(incrementByAmount(+input))}}>+</button>
            </div>
        </>
    );
} 
