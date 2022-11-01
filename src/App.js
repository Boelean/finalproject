import './App.css'
import videos from './videos.json'
import Video from './components/Video'

const App = () => {
  return (
    <div>
      <h1>YouTube Videos</h1>
      <Video videos={videos.videos} />
    </div>
  )
}

export default App
