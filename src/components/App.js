import logo from '../logo.svg';
import {useEffect, useState} from 'react';
import '../css/App.css';
import '../css/classes.css';
import '../css/animations.css';
import {Blink, Sound, Enter, MoveCursor, ShowDivs} from '../functions/coolEffects';
import Welcome from "./welcome";
import Main from "./Main";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faChevronRight, faPlus, faInfoCircle} from '@fortawesome/free-solid-svg-icons'


library.add(faChevronRight, fab, faPlus, faInfoCircle)
export default function App() {
  

  useEffect(
    Blink,
    Enter(),
    MoveCursor()
  )
  

  
  return (
    <>
      <Welcome />
      <Main />
    </>
  );
  
  
}
