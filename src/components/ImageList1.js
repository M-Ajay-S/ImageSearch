import React from "react";
import ImageCard from "./imageCard";

class ImageList extends React.Component{

    
    render(){
       const images= this.prop.images.map((image)=>{
            return <ImageCard  id={image.id} image={image}/>
        })
        return(
            <div>
                {images}
            </div>
        )
    }
}