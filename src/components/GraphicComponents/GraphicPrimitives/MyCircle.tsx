import * as React from 'react'
import Konva from 'konva'
import { Text, Circle } from 'react-konva'
import { MyCircleProps } from './MyCircleInterfaces'

export const MyCircle: React.FC<MyCircleProps> = ({
  i,
  id,
  typeShape,
  handleDragMove,
  color,
  draggable,
  x,
  y
}) => {

  const handleDragStart = (e: Konva.KonvaEventObject<DragEvent>): void => {
    e.target.setAttrs({
      shadowOffset: {
        x: 15,
        y: 15,
      },
      scaleX: 1.1,
      scaleY: 1.1,
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
    })
  }

  return (
    <React.Fragment>
    <Circle
      key={i}
      x={x}
      y={y}
      radius={10}
      numPoints={5}
      innerRadius={20}
      outerRadius={40}
      fill={color}
      opacity={1}
      draggable={draggable}
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
    <Text
      x={x}
      y={y}
      scaleX={1.2}
      scaleY={1.2}
      text={draggable?"c"+i:""}
    />
  </React.Fragment>
  )
}
