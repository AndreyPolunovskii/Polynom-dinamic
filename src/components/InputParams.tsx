import React from 'react'
import { GLOBAL_WIDTH_CANVAS } from './GlobalConstants'
import cs from './InputParams.module.scss'

interface propInputParams {
  order: number
  setOrder: React.Dispatch<React.SetStateAction<number>>
  queryInit: number
  setQueryInit: React.Dispatch<React.SetStateAction<number>>
}

export const InputParams: React.FC<propInputParams> = ({
  order,
  setOrder,
  queryInit,
  setQueryInit
}) => {
  return (
    <div style={{ width: GLOBAL_WIDTH_CANVAS }} className={cs.wrapper}>
      <div className={cs.wrapper_item}>
        <p>Порядок многочлена</p>
        <input
          value={order}
          type="number"
          min="1"
          onChange={(e) => {
            setOrder(isNaN(parseInt(e.target.value)) || parseInt(e.target.value) <= 0 ? 1 : parseInt(e.target.value))
          }}
        />
      </div>
      <div className={cs.wrapper_item}>
        <p>Количество начальных условий</p>
        <input
          value={queryInit}
          type="number"
          min="1"
          onChange={(e) => {
            setQueryInit(isNaN(parseInt(e.target.value)) || parseInt(e.target.value) <= 0  ? 1 : parseInt(e.target.value))
          }}
         />
      </div>
    </div>
  )
}
