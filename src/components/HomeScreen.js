import React from 'react'

import messages from '../icons/ios-message-512x512-1575946.png'
import calendar from '../icons/calendar-512x512-2365233.png'
import photos from '../icons/photos-512x512-2365244.png'
import camera from '../icons/camera-512x512-2365232.png'
import weather from '../icons/weather-512x512-2365236.png'
import clock from '../icons/clock-512x512-2365231.png'
import maps from '../icons/maps.png'
import voice from '../icons/voice-memos-512x512-1575942.png'
import wallet from '../icons/wallet-512x512-2365237.png'
import notes from '../icons/notes-512x512-2365245.png'
import reminders from '../icons/reminders-512x512-2365242.png'
import stocks from '../icons/stocks-512x512-2365239.png'
import music from '../icons/apple-music-512x512-2365226.png'
import appStore from '../icons/app-store-512x512-2365235.png'
import book from '../icons/books-512x512-2365234.png'
import health from '../icons/health-512x512-2365228.png'
import settings from '../icons/settings-512x512-2365240.png'
import phone from '../icons/phone.png'
import safari from '../icons/safari-512x512-2365241.png'
import adobe from '../icons/adobe.png'
import tv from '../icons/apple-tv-512x512-1575940.png'

import Safari from './Safari'
import Pdf from './Pdf'
import Phone from './Phone'
import Music from './Music'

const HomeScreen = ({ homeScreen, setHomeScreen }) => {
  let homeScreenContent

  if (homeScreen === 'AppsList') {
    homeScreenContent = (
      <>
        <div className="apps">
          <div className="app">
            <div className="overlay">Installing</div>
            <img src={messages} alt=""></img>
            <p>Messages</p>
          </div>
          <div className="app">
            <div className="overlay">Installing</div>
            <img src={calendar} alt=""></img>
            <p>Calendar</p>
          </div>
          <div className="app">
            <div className="overlay">Installing</div>
            <img src={photos} alt=""></img>
            <p>Photos</p>
          </div>
          <div className="app">
            <div className="overlay">Installing</div>
            <img src={camera} alt=""></img>
            <p>Camera</p>
          </div>
          <div className="app">
            <div className="overlay">Installing</div>
            <img src={weather} alt=""></img>
            <p>Weather</p>
          </div>
          <div className="app">
            <div className="overlay">Installing</div>
            <img src={clock} alt=""></img>
            <p>Clock</p>
          </div>
          <div className="app">
            <div className="overlay">Installing</div>
            <img src={maps} alt=""></img>
            <p>Maps</p>
          </div>
          <div className="app">
            <div className="overlay">Installing</div>
            <img src={voice} alt=""></img>
            <p>Voice</p>
          </div>
          <div className="app">
            <div className="overlay">Installing</div>
            <img src={wallet} alt=""></img>
            <p>Wallet</p>
          </div>
          <div className="app">
            <div className="overlay">Installing</div>
            <img src={notes} alt=""></img>
            <p>Notes</p>
          </div>
          <div className="app">
            <div className="overlay">Installing</div>
            <img src={reminders} alt=""></img>
            <p>Reminders</p>
          </div>
          <div className="app">
            <div className="overlay">Installing</div>
            <img src={stocks} alt=""></img>
            <p>Stocks</p>
          </div>
          <div className="app">
            <div className="overlay">Installing</div>
            <img src={music} alt=""></img>
            <p>Music</p>
          </div>
          <div className="app">
            <div className="overlay">Installing</div>
            <img src={appStore} alt=""></img>
            <p>App Store</p>
          </div>
          <div className="app">
            <div className="overlay">Installing</div>
            <img src={book} alt=""></img>
            <p>Books</p>
          </div>
          <div className="app">
            <div className="overlay">Installing</div>
            <img src={health} alt=""></img>
            <p>Health</p>
          </div>
          <div className="app">
            <div className="overlay">Installing</div>
            <img src={tv} alt=""></img>
            <p>Apple Tv</p>
          </div>
          <div className="app"></div>
          <div className="app"></div>
          <div className="app"></div>
        </div>
        <div className="drawer">
          <div
            className="app"
            style={{ cursor: 'pointer' }}
            onClick={() => setHomeScreen('Phone')}
          >
            <img src={phone} alt=""></img>
          </div>
          <div
            className="app"
            style={{ cursor: 'pointer' }}
            onClick={() => setHomeScreen('Safari')}
          >
            <img src={safari} alt=""></img>
          </div>
          <div
            className="app"
            style={{ cursor: 'pointer' }}
            onClick={() => setHomeScreen('Pdf')}
          >
            <img src={adobe} alt="" style={{ borderRadius: '10px' }}></img>
          </div>
          <div
            className="app"
            style={{ cursor: 'pointer' }}
            onClick={() => setHomeScreen('Music')}
          >
            <img src={settings} alt=""></img>
          </div>
        </div>
      </>
    )
  } else if (homeScreen === 'Phone') {
    homeScreenContent = <Phone />
  } else if (homeScreen === 'Safari') {
    homeScreenContent = <Safari />
  } else if (homeScreen === 'Pdf') {
    homeScreenContent = <Pdf />
  } else if (homeScreen === 'Music') {
    homeScreenContent = <Music />
  }

  return <div className="home-screen">{homeScreenContent}</div>
}

export default HomeScreen
