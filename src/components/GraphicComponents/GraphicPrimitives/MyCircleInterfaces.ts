import Konva from 'konva'

export interface MyCircleProps {
  i : number,
  id : number,
  typeShape: string,
  handleDragMove: (e: Konva.KonvaEventObject<DragEvent>) => void,
  color?: string,
  draggable: boolean,
  x: number,
  y: number
}
