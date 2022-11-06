import Video from './Video'

const VideoList = (props) => {
  return (
    <>
      {props.videos.map((video) => (
        <div className="videoBox">
          <Video video={video} key={video.title} />
        </div>
      ))}
    </>
  )
}

export default VideoList
