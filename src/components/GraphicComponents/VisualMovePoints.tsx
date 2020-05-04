import * as React from 'react'
import Konva from 'konva'
import { Layer } from 'react-konva'
import { MyCircle } from './GraphicPrimitives/MyCircle';

export const VisualMovePoints: React.FC = () => {

  const handleDragMove = (e: Konva.KonvaEventObject<DragEvent>): void => {
    //  console.log(e.target.x(),e.target.y(),e.target.zIndex())
      console.log(e.target.getAttrs())
  }

  return (
        <Layer>
          {[...Array(2)].map((_, i) => (
            <MyCircle i={i} id={i} typeShape={"coeff"} handleDragMove={handleDragMove} />
          ))}
          {[...Array(2)].map((_, i) => (
            <MyCircle i={i} id={i} typeShape={"roots"} handleDragMove={handleDragMove} />
          ))}
        </Layer>
  )
}
