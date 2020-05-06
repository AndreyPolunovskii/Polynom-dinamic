import { Points } from './InterfacePoints'
import { GLOBAL_HEIGHT_CANVAS, GLOBAL_WIDTH_CANVAS } from '../GlobalConstants'


export const initPoints = (order : number, queryInit : number) => {
  const initState : Points = {
    coeffPoints :
    [...Array(order)].map(()=>({
      x: Math.random() * GLOBAL_WIDTH_CANVAS,
      y: Math.random() * GLOBAL_HEIGHT_CANVAS
    })),
    rootPoints : [...Array(queryInit)].map(()=>({
      x: Math.random() * GLOBAL_WIDTH_CANVAS,
      y: Math.random() * GLOBAL_HEIGHT_CANVAS
    }))
  }
  return initState
}
