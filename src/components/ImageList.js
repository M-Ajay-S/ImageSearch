import "./imageList.css"
import React from "react";
import ImageCard from './imageCard'

class ImageList extends React.Component{
    render(){
        console.log(this.props.images)
       const images= this.props.images.map(image=>{
      return <ImageCard key={image.id} image={image} />})
        return(<div className="imageList">{images}</div>
        )
    }
    
}

export default ImageList