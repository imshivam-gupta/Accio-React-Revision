import React from "react";
class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {color:"red"};
    }

    static getDerivedStateFromProps(props,state){
        console.log("hi from derived state");
        return {x:props.favc};
    }

    shouldComponentUpdate(){
        console.log(this.state.color);
        // if(this.state.color=="red") return false;
        return true;
    }

    changeColor = () => {
        this.setState({color:"white"});
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log(prevState,prevProps);
        return null;
    }

    componentDidUpdate(){
        console.log("hi from update");
    }

    render(){
        console.log("render");
        return(
            <div>
                <h1> My favourite color is {this.state.color}</h1>
                <button type="button" onClick={this.changeColor}>changeColor</button>
            </div>
        )
    }
}

export default Header;
// this keyword binding in js/react