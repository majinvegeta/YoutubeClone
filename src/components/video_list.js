import React from 'react'
import VideoListItem from'./video_list_item'

const VideoList=function(props){
	const data=props.videos.map((video)=>{
		return (
			<VideoListItem
			 onVideoClick={props.onVideoSelect}
			 key={video.etag}
			 video={video}/>

		)
	})
	
	
	return (
		<div>
			<ul className="col-md-4 list-group">
				{data}
			</ul>
		</div>

	)
}

export default VideoList