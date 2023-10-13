// React Context is a way to manage state globally.

// It can be used together with the useState Hook to share state between 
// deeply nested components more easily than with useState alone.

// The Problem :
// State should be held by the highest parent component in the stack that requires access to the state.

// To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state.

// To do this without Context, we will need to pass the state as "props" through each nested component.
//  This is called "prop drilling".

import { useState, createContext, useContext } from "react";

const UserContext  = createContext();

function Component1() {
    const [user, setUser] = useState('Jesse Hall');
    return(
        <UserContext.Provider value={user}>
            <h1>{`Hello ${user}!`}</h1>
            <Component2 />
        </UserContext.Provider>
    )
}

function Component2() {
    return(
        <>
        <h1>Component2</h1>
        <Component3 />
        </>
    )
}

function Component3() {
    return (
        <>
        <h1>Component 3</h1>
        <Component4 />
        </>
    )
}

function Component4(){
    const user = useContext(UserContext)
    return (
        <>
        <h1>My name is {user}</h1>
        </>
    )
}

export default Component1;