import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Component0 } from './Components/Compnent0'
import { Component1 } from './Components/Component1'
import { Component2 } from './Components/Component2'
import { Component3 } from './Components/Component3'
import { Component4 } from './Components/Component4'
import { Component5 } from './Components/Component5'
import { Component6 } from './Components/Component6'
import { Component7 } from './Components/Component7'
import { Component8 } from './Components/Component8'

function App() {
  return (
    <>
        <Component0 />

        <Component1 />

        <div>
        <Component2 />
        </div> 
        <div>
          <Component3 />
        </div>
        <div>
          <Component4 />
        </div>
        <div>
          <Component5 />
        </div>
        <div className='box'>
          <Component6 />
        </div>
        <div className='box0'>
          <Component7 /> 
        </div>
        <div>
          <Component8 />
        </div>
    </>
  );
};

export { App };
