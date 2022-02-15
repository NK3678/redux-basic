const redux = require('redux');

const initState = {
    counter: 0
}

const counterReducer = (state=initState, action) =>{
    return {
        counter: state.counter + 1
    }
}

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
    const lastesStore = store.getState();
    console.log(lastesStore);
}

store.subscribe(counterSubscriber);

store.dispatch({type:'inc'})