import { Points } from './InterfacePoints'
import { GLOBAL_HEIGHT_CANVAS, GLOBAL_WIDTH_CANVAS } from '../GlobalConstants'


export const mockState : Points = {
  coeffPoints :
  [...Array(5)].map(()=>({
    x: Math.random() * GLOBAL_WIDTH_CANVAS,
    y: Math.random() * GLOBAL_HEIGHT_CANVAS
  })),
  rootPoints : [...Array(5)].map(()=>({
    x: Math.random() * GLOBAL_WIDTH_CANVAS,
    y: Math.random() * GLOBAL_HEIGHT_CANVAS
  }))
}


export const mockState2 : Points = {
  coeffPoints : [
  {
    x: 10 + GLOBAL_WIDTH_CANVAS/2,
    y: 5 + GLOBAL_HEIGHT_CANVAS/2
  },
  {
    x: 0.1 + GLOBAL_WIDTH_CANVAS/2,
    y: -20 + GLOBAL_HEIGHT_CANVAS/2
  }],
  rootPoints : [
  {
    x: -0.07032 + GLOBAL_WIDTH_CANVAS/2,
    y: 0.03 + GLOBAL_HEIGHT_CANVAS/2
  },
  {
    x: 0.329 + GLOBAL_WIDTH_CANVAS/2,
    y: -0.583 + GLOBAL_HEIGHT_CANVAS/2
  }]
}



// let sum = 0;
// mockState.coeffPoints.forEach((item,i)=>(
//   sum += item
// ))
//
// mockState.rootPoints[0] = sum
