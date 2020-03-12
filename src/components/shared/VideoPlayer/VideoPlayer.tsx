import * as React from 'react';
import styled from 'styled-components';

interface PageHeadingMainProps {
  videoId: string;
}

const VideoFrame = styled.iframe``;

export class VideoPlayer extends React.Component<PageHeadingMainProps> {
  public render() {
    const src = `http://fast.wistia.com/embed/iframe/${this.props.videoId}`;

    return (
      <div className="videoWrapper">
        <VideoFrame
          className="video-frame"
          src={src}
          frameBorder="0"
          scrolling="no"
        ></VideoFrame>
      </div>
    );
  }
}
