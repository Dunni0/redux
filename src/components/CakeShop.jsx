import React from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'
// import { UseSelector, useDispatch } from 'react-redux'

function CakeShop(props) {
  return (
    <div>
        <h1> Number of Cakes - {props.numOfCakes} </h1>
        <button onClick={props.buyCake}> Buy Cake </button>
    </div>
  )
}

// Dispatching the action to our react application

// STEP 1
// Create a function that gets the redux state & holds it
// Helps us get access to the redux-state. Gets the redux state as a 
// parameter which can then be used to get the appropriate state properties.
// Here, we map state.numOfCakes to numOfCakeswhich we then passed into the JSX
const mapStateToProps = state => {
   return {
    numOfCakes: state.numOfCakes
   }
}
// STEP 2
// Create another function that accepts the redux dispatch method as a parameter
// This function returns an object which is the action creator from redux
const mapDispatchToProps = dispatch => {
    return{
        buyCake: () => dispatch(buyCake())
    }
}

// Step 3
// connecting these 2 functions with a react function - CONNECT 
// what thhis connect function does is literally what the names of the 2 functions mean

// In the first function, the state from the redux store is mapped to our component props.
// so apart from what the cakeShop container might recieve initially, it will now receive another
// props called numOfCakes which reflects the numOfCakes in the redux store

// Similarly, the second function will basically map our dispatch of an action creator to a prop in
// our component

export default connect(mapStateToProps, mapDispatchToProps) (CakeShop)