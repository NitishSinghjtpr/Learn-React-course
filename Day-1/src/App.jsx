
import './App.css'
import Navbar from './component/navbar'
import { Footer } from './component/Footer';
// import navbar from './component/navbar'

function App() {

  const isSubscrived=false;
  return (
    <>
    
    <Navbar />
      <div className='body'>
        {isSubscrived?<p>Subscribe kar diya hun</p>:<p>Subscribe nhi kiya hun</p>}

      <h1>Nitish</h1>
      </div>
      <Footer/>
     
    </>
  )
}

export default App
