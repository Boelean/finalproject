import './App.css'
import data from './videos.json'
import VideoList from './components/VideoList'

const App = () => {
  return (
    <div className="videosContainer">
      <h1 className="mainTitle">YouTube Videos</h1>
      <VideoList videos={data.videos} />
    </div>
  )
}

export default App
