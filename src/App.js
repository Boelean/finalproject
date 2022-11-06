import './App.css'
import data from './videos.json'
import VideoList from './components/VideoList'

const App = () => {
  return (
    <div>
      <h1 className="mainTitle">YouTube Videos</h1>
      <div className="videoContainers">
        <VideoList videos={data.videos} />
      </div>
    </div>
  )
}

export default App
