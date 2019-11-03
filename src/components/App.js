import unsplash from "../api/unsplash";
import React from "react";
import ImageList from "./ImageList"
import SearchBar from "./SearchBar"

class App extends React.Component{
    state={images:[]}
     onSearchSubmit=async (term)=>{
        console.log(term)
   const response=await unsplash.get('/search/photos/?client_id=AsH-2JZ2PX6KVizRTgXxsT-QP9QSTj8_6Dw4WfVQqbY',{params:{
            query:term
        }})

        this.setState({images:response.data.results})
    }
render(){

    return(
        <div className="ui container" style={{marginTop:'10px'}}>
        
        <SearchBar onSubmit={this.onSearchSubmit}/>
        Found {this.state.images.length} images
        <ImageList images={this.state.images} />
        
        </div>
        
        )
    }
}
    

export default App