// Practicing with context

import logo from "./logo.svg"
import "./App.css";
import MessageContext from "./src/context/MessageContext";
import {useContext} from "./src/context/MessageContext"

export default function App(){

    const message = "Hello World";

    return (
        <div>
            <MessageContext.Provider value={message}>
                <ComponentA></ComponentA>
                {/* <ComponentB></ComponentB> */}
            </MessageContext.Provider>
        </div>
    );
}

function ComponentA(){
    return(<ComponentB></ComponentB>);
}

function ComponentB(){
    const message = useContext(MessageContext);

    return(<div>Message: {message}</div>);
}