import {createStore,combineReducers} from 'redux';

const BUY_CAKE = 'BUY_CAKE'
const RESTOCK_CAKE = 'RESTOCK_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake(){
    return{
        type:BUY_CAKE,
        info: 'First Redux Action'
    }
}

function buyIcecream(){
    return{
        type:BUY_ICECREAM,
        info: 'Bought icrcream'
    }
}


function restockCake(){
    return{
        type: RESTOCK_CAKE,
        info: 'Restocking done',
    }
}

const initialState = {
    numOfCakes:10
}

const initialIceState = {
    numOfIcecream:20
}

const cakeReducer = (state=initialState,action) =>{
    switch(action.type){
        case BUY_CAKE:
            return {...state,numOfCakes:state.numOfCakes-1}
        case RESTOCK_CAKE:
            return {...state,numOfCakes:state.numOfCakes+1,info:action.info}
        default:
            return state
    }
}

const icecreamReducer = (state=initialIceState,action) =>{
    switch(action.type){
        case BUY_ICECREAM:
            return {...state,numOfIcecream:state.numOfIcecream-1}
        default:
            return state
    }
}

const rootReducer = combineReducers({
    cake:cakeReducer,
    icream:icecreamReducer
})


const store = createStore(rootReducer);
console.log('Initial State',store.getState());
const unsubscribe = store.subscribe(
    ()=>
    console.log('Updated State',store.getState())
    // rerender_all_subs
);

// reload

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());



store.dispatch(buyCake());
store.dispatch(restockCake());

unsubscribe();

// console.log('Updated State',store.getState());