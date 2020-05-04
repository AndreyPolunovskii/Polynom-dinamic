import * as React from 'react'
import Konva from 'konva'
import { Circle } from 'react-konva'
import { GLOBAL_HEIGHT_CANVAS, GLOBAL_WIDTH_CANVAS } from '../../GlobalConstants'
import { MyCircleProps } from './MyCircleInterfaces'

export const MyCircle: React.FC<MyCircleProps> = ({
  i,
  id,
  typeShape,
  handleDragMove,
}) => {

  const handleDragStart = (e: Konva.KonvaEventObject<DragEvent>): void => {
    e.target.setAttrs({
      shadowOffset: {
        x: 15,
        y: 15,
      },
      scaleX: 1.1,
      scaleY: 1.1,
      opacity: 0.5,
    })
  }

  const handleDragEnd = (e: Konva.KonvaEventObject<DragEvent>): void => {
    e.target.to({
      duration: 0.5,
      easing: Konva.Easings.ElasticEaseOut,
      scaleX: 1,
      scaleY: 1,
      shadowOffsetX: 5,
      shadowOffsetY: 5,
      opacity: 0.5,
    })
  }

  return (
    <Circle
      key={i}
      x={Math.random() * GLOBAL_WIDTH_CANVAS}
      y={Math.random() * GLOBAL_HEIGHT_CANVAS}
      radius={10}
      numPoints={5}
      innerRadius={20}
      outerRadius={40}
      fill="#89b717"
      opacity={0.8}
      draggable
      rotation={Math.random() * 180}
      shadowColor="black"
      shadowBlur={10}
      shadowOpacity={0.6}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragMove={handleDragMove}
      data_id={id}
      data_typeCircle={typeShape}
    />
  )
}
