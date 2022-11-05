import Rating from './Rating'
import Duration from './Duration'

const Video = (props) => {
  return (
    <li>
      <h3>{props.video.title}</h3>
      <Duration duration={props.video.duration} />
      <img src={props.video.thumbnail_path} />
      <Rating rating={props.video.rating} />
    </li>
  )
}

export default Video
