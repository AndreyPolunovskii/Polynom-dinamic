import * as React from 'react'
import {  Layer, Text, Shape } from 'react-konva'
import {GLOBAL_HEIGHT_CANVAS, GLOBAL_WIDTH_CANVAS} from '../GlobalConstants';


export const Coordinates: React.FC = () => {

  return (
    <Layer>
      <Text
        x={0.95 * GLOBAL_WIDTH_CANVAS / 2}
        y={(0.05 * GLOBAL_HEIGHT_CANVAS) / 2}
        scaleX={2}
        scaleY={2}
        text="Y"
      />
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath()
          context.moveTo(GLOBAL_WIDTH_CANVAS / 2, 0)
          context.lineTo(GLOBAL_WIDTH_CANVAS / 2, context.canvas.height*1.2)
          context.closePath()
          context.fillStrokeShape(shape)
        }}
        fill="#00D2FF"
        stroke="black"
        strokeWidth={0.5}
      />
      <Text
        x={0.97 * GLOBAL_WIDTH_CANVAS}
        y={(0.91 * GLOBAL_HEIGHT_CANVAS) / 2}
        scaleX={2}
        scaleY={2}
        text="X"
      />
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath()
          context.moveTo(0, GLOBAL_HEIGHT_CANVAS / 2)
          context.lineTo(context.canvas.width*1.2, GLOBAL_HEIGHT_CANVAS / 2)
          context.closePath()
          context.fillStrokeShape(shape)
        }}
        fill="#00D2FF"
        stroke="black"
        strokeWidth={0.5}
      />
    </Layer>
  )

}
