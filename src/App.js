import './App.css';
import React,{ useState } from 'react'
import NavBar from './components/Nabbar';
import LoadingBar from 'react-top-loading-bar'
import News from './components/samachar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = ()=> {
  const pageSize = 5;
  const apiKey=process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)

    return (
      <div>
       <Router>
          <NavBar />
          <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
         
         <Routes>
            <Route path='/' element={<News setProgress={setProgress} apiKey={apiKey}  key='general' pageSize={12} country='in' category='general' />}></Route>
            <Route path='/business' element={<News setProgress={setProgress} apiKey={apiKey}  key='business' pageSize={12} country='in' category='business' />}></Route>
            <Route path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key='entertainment' pageSize={12} country='in' category='entertainment' />}></Route>
            <Route path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key='health' pageSize={12} country='in' category='health' />}></Route>
            <Route path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key='science' pageSize={12} country='in' category='science' />}></Route>
            <Route path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key='sports' pageSize={12} country='in' category='sports' />}></Route>
            <Route path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key='technology' pageSize={12} country='in' category='technology' />}></Route>
            </Routes>
        </Router>
      </div>
    )
  }
  export default App;



