import Rating from './Rating'
import Duration from './Duration'

const Video = (props) => {
  return (
    <li>
      <img src={props.video.thumbnail_path} />
      <h2>Video: {props.video.title}</h2>
      {/* <h6>Duration: {props.video.duration}</h6> */}
      <Rating rating={props.video.rating} />
      <Duration duration={props.video.duration} />
    </li>
  )
}

export default Video
