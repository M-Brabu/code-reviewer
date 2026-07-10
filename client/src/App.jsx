import './App.css'
import Navbar from './components/Navbar'
import MEditor from './components/MEditor'
import AiReview from './components/AiReview'
function App() {
return (
    <>
    <Navbar/>
    <div className='Editor-review-panel'>
    <MEditor/>
    {/* <AiReview/> */}
    </div>
    </>
  )
}

export default App
