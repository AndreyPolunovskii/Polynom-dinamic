import * as React from 'react';
import './App.css';

import { WrapperStage } from './components/WrapperStage'


const App: React.FC = () => {
  return (
    <div className="App">
        <p className="title">
        Рисуем точки
        </p>
    <WrapperStage/>
    </div>
  )
}

export default App;
