import React from "react";

class imageCard extends React.Component{
    imageRef=React.createRef()
    state={span:0}
    spans=()=>{

        const height=this.imageRef.current.clientHeight
        const span=Math.ceil(height/10)
        this.setState({span})
    }
    componentDidMount(){
        this.imageRef.current.addEventListener('load',this.spans)
    }
    render(){
       const {description,urls}=this.props.image
        return(<div className="span" style={{gridRowEnd:`span ${this.state.span}`}}>

                <img ref={this.imageRef} src={urls.regular} description={description}/>
        </div>)
    }
}