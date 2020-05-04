import React, { useState, useEffect } from 'react'
import Konva from 'konva'
import { Layer } from 'react-konva'
import { MyCircle } from './GraphicPrimitives/MyCircle'
import { Points } from './InterfacePoints'
import { mockState } from './MockInitPoints'
import { solverWrapper } from '../../logics/solver'

export const VisualMovePoints: React.FC = () => {

  const initState : Points = { coeffPoints : [], rootPoints: []}

  const [points, setPoints] = useState<Points>(initState)

  useEffect (()=>{
      setPoints(mockState)
  },[])

  const handleDragMove = (e: Konva.KonvaEventObject<DragEvent>): void => {
    let currentPoint = {x:e.target.x(),y:e.target.y()}
    let currentIdPoint = e.target.getAttrs().data_id
    let newPoints = {...points}
    newPoints.coeffPoints[currentIdPoint] = currentPoint //сохранили текущее изменение коэеффициента
    newPoints = solverWrapper(newPoints)
    setPoints(() => newPoints)

  }

  return (
    <Layer>
      {points.coeffPoints.map((item, i) => (
        <MyCircle
          i={i}
          id={i}
          typeShape={'coeff'}
          color={'#b5a79e'}
          draggable={true}
          handleDragMove={handleDragMove}
          x={item.x}
          y={item.y}
        />
      ))}
      {points.rootPoints.map((item, i) => (
        <MyCircle
          i={i}
          id={i}
          typeShape={'roots'}
          color={'#89b717'}
          draggable={false}
          handleDragMove={handleDragMove}
          x={item.x}
          y={item.y}
        />
      ))}
    </Layer>
  )
}
