import { Points } from './InterfacePoints'
import { GLOBAL_HEIGHT_CANVAS, GLOBAL_WIDTH_CANVAS } from '../GlobalConstants'


export const mockState : Points = {
  coeffPoints :
    [...Array(2)].map(()=>({
      x: Math.random() * GLOBAL_WIDTH_CANVAS,
      y: Math.random() * GLOBAL_HEIGHT_CANVAS
    })),
  rootPoints :
    [...Array(2)].map(()=>({
      x: Math.random() * GLOBAL_WIDTH_CANVAS,
      y: Math.random() * GLOBAL_HEIGHT_CANVAS
    }))
}
