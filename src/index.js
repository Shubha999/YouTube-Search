import API_KEY from './config/api_key';
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Create a new componenet which produces some HTML

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null,
		};
		this.videoSearch('India');
	}

	videoSearch(term) {
		YTSearch({ key: API_KEY, term: term }, videos => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0],
			});
		});
	}

	render() {
		const videoSearch = _.debounce(term => {
			this.videoSearch(term);
		}, 300);
		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					videos={this.state.videos}
					onVideoSelect={selectedVideo =>
						this.setState({ selectedVideo })
					}
				/>
			</div>
		);
	}
}

ReactDom.render(<App />, document.querySelector('.container'));
