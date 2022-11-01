import React from 'react'

const Video = (props) => {
  return (
    <div>
      <ul>
        {props.videos.map((video) => (
          <li key={video.title}>
            <h2>Video: {video.title}</h2>
            <h6>Duration: {video.duration}</h6>
            <h5>Rating: {video.rating}</h5>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Video
