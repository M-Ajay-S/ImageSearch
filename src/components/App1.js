import unsplash from '../api/unsplash'
import react from 'react'
import SearchBar from './SearchBar'
import ImageList from './ImageList'

class App extends react.Component{
    state={images:[]}
    dosubmit=async (term)=>{
        const response=await unsplash.get('/search/photos/?client_id=AsH-2JZ2PX6KVizRTgXxsT-QP9QSTj8_6Dw4WfVQqbY',{params:{query:term}})
        this.setState({images:response.data.result})
    }
    render(){
        return(<div>
            <SearchBar dosubmit={this.dosubmit}/>
            <ImageList images={this.state.images}/>
        </div>)
    }
}