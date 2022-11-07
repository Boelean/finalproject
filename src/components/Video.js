import Rating from './Rating'
import Duration from './Duration'

const Video = (props) => {
  return (
    <div>
      <h2 className="videoTitle">{props.video.title}</h2>
      <Duration duration={props.video.duration} />
      <img className="thumbnail" src={props.video.thumbnail_path} />
      <Rating rating={props.video.rating} />
    </div>
  )
}

export default Video
