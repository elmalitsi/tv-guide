import './App.scss';
import * as constants from  './constants';
import React, {useState, useEffect} from 'react'
import TopBar from './components/topBar/TopBar';
import Footer from './components/footer/Footer';
import Channel from './components/channel/Channel';
import Loader from './components/loader/Loader';
import Error from './components/error/Error';
import Day from './components/day/Day';
import Favorite from './components/favorite/Favorite';


function App() {
  const [channels, setChannels] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [failed, setFailed] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    fetch(constants.url)
    .then(res => res.json())
    .then(
      (result) => {
        setChannels(result.channels)
        setIsLoading(false)
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        setIsLoading(false)
        //TODO handle error message
        setFailed(true)
      }
    )
  }, [])

  if (failed){
    return (
      <div className="App">
        <TopBar/>
        <Error error="Error while trying to get the data. Please try again"/>
        <Footer/>
      </div>
    )

  }


  return (
    <div className="App">
      <TopBar/>
      <div className="top-bar-wrapper">
        <Favorite/>
        <div>
          <Day/>
        </div>
      </div>
        {isLoading ? <Loader/> : <Channel channels={channels}/>}
      <Footer/>
    </div>
  );
}

export default App;
