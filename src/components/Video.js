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

// return (
//   <div>
//     <ul>
//       {props.movies.map((movie) => (
//         <li key={movie.title}>
//           <img src={movie.poster_path} width="300" />
//           <h2>{movie.title}</h2>
//           <h6>Release Date: {movie.release_date}</h6>
//           <h5>Overview: {movie.overview}</h5>
//             {movie.genres.map((genre, index) => {
//               return (
//                 <div key={index}>
//                   <h5 style={{color:`${changeColor(genre.name)}`}}>Genre: {genre.name}</h5>
//                 </div>
//               );
//             })}
//         </li>
//       ))}
//     </ul>
//   </div>
// )
// }
