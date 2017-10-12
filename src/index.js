import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import _ from 'lodash'

const API_KEY="AIzaSyA0c1sJZEbU9n-0q5Efmmo4B4S1qbo4N5o";



class App extends React.Component{
	constructor(props){
		super(props)
		this.state={
			videos:[],
			selectedVideo:null
		}
		this.videoSearch("Surf")

	}
	videoSearch(term){
		YTSearch({key:API_KEY,term:term},
			(videos)=>{this.setState({videos:videos,selectedVideo:videos[0]})})
	}
	render(){
		const videoSearch=_.debounce((term)=>{this.videoSearch(term)},300)
		return (
			<div>

				<SearchBar onTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} 
				  />
				<VideoList 
				onVideoSelect={selectedVideo=>this.setState({selectedVideo:selectedVideo})}
				
				videos={this.state.videos}/>
				
			</div>

		)
	}
}

ReactDOM.render(<App />,document.querySelector('#root'))