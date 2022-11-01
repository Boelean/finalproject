import './App.css'
import videos from './data.json'
import Video from './components/Video'

const App = () => {
  return (
    <div>
      <h1>YouTube Videos</h1>
      <Video videos={videos} />
    </div>
  )
}

export default App
