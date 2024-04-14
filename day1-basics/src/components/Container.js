import React from "react";
class Container extends React.Component{
    constructor(props){
        super(props);
        this.state = {show:true};
    }

    delChild = () => {
        this.setState({show:false});
    }

    render(){
        let mychild;
        if(this.state.show){
            mychild = <Child />
        }
        return (<div>
            {mychild}
            <button type="button" onClick={this.delChild}>Delete Child</button>
        </div>)
    }
}


class Child extends React.Component{
    // task beforee its deletion
    componentWillUnmount(){
        alert("you are deleting this");
    }
    render(){
        return(<h1>Hello World</h1>)
    }
}

export default Container;