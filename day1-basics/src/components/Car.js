import React from "react";
import { Child } from "../App";

class Car extends React.Component{
    constructor(props){
        super(props);
        console.log("hi from constructor");
        this.state = {x:6};
        // h1 propery -> props.x
    }
    static getDerivedStateFromProps(props,state){
        console.log("hi from derived state");
        return {x:props.x};
    }
    changeStateFunction = () => {
        this.setState({x:99});
    }
    componentDidMount(){
        console.log("hi from comp did mount");
    }
    render(){
        console.log("hi from render");
        const h1 = <h1 style={{"color":"blue"}} onClick={this.changeStateFunction}>Hello Car {this.state.x} </h1>
        return (
            h1
        );
    }
}

/*
Lifecycle Methods
- componentDidMount

to code this in class based and tjen shift it to fucntional based component

Mounting
1. constructor >
2. getDerviedStateFromProps >
3. render >
4. componentDidMount >

Updating Phase
1. getDerivedStateFromProps() >
2. shouldComponentUpdate()
3. render()
4. getSnapshotBeforeUpdate
5. componentDidUpdate()


Unmount Phase
1. componentWillUnmount

*/



export default Car;