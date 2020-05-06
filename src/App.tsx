import './App.css';
import React, { useState } from 'react';
import { InputParams } from './components/InputParams'
import { WrapperStage } from './components/WrapperStage'


const App: React.FC = () => {
  const [order, setOrder] = useState<number>(6)
  const [queryInit, setQueryInit] = useState<number>(20)

  return (
    <div className="App">
      <p className="title">
        <i>Изображаем динамику корней многочленов</i>
      </p>
      <InputParams
        order={order}
        setOrder={setOrder}
        queryInit={queryInit}
        setQueryInit={setQueryInit}
      />
      <WrapperStage
        order={order}
        queryInit={queryInit}
      />
    </div>
  )
}

export default App;
