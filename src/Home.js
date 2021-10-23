import React, { Component } from "react";
import Search from "./components/Search/Search";
import VideoList from "./components/VideoList/VideoList";
import youtubeApi from './api/youtube';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videosMetaInfo: [],
      selectedVideoId: null
    }
  }

  onSearch = async keyword => {
    const response = await youtubeApi.get("/search", {
      params: {
        q: keyword
      }
    });
    this.setState({
      videosMetaInfo: response.data.items,
      selectedVideoId: response.data.items[0].id.videoId
    });
  };

  render() {

    return (
      <div className="container">
        <div style={{ minHeight: "800px" }}>
          <Search onSearch={this.onSearch} />
          <VideoList
            onVideoSelected={this.onVideoSelected}
            data={this.state.videosMetaInfo}
          />
        </div>

      </div>
    );
  }
}

export default Home;