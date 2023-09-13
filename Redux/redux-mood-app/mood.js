const h1 = document.querySelector('h1')
const happy = document.querySelector('#happy')
const sad = document.querySelector('#sad')
const mindBlown = document.querySelector('#mindBlown')
const love = document.querySelector('#love')

happy.addEventListener('click', function(e){
    store.dispatch({type: "HAPPY", payload: "😃"})
    const state = store.getState()
    console.log(state)
    h1.innerText = state.mood;
})

sad.addEventListener('click', function(e){
    store.dispatch({type: "SAD", payload: "😞"})
    const state = store.getState()
    console.log(state)
    h1.innerText = state.mood;
})

mindBlown.addEventListener('click', function(e){
    store.dispatch({type: "MINDBLOWN", payload: "🤯"})
    const state = store.getState()
    console.log(state)
    h1.innerText = state.mood;
})

love.addEventListener('click', function(e){
    store.dispatch({type: "LOVE", payload: "😍"})
    const state = store.getState()
    console.log(state)
    h1.innerText = state.mood;
})

