import Video from './Video'

const VideoList = (props) => {
  return (
    <div>
      <ul>
        {props.videos.map((video) => (
          <Video video={video} key={video.title} />
        ))}
      </ul>
    </div>
  )
}

export default VideoList
