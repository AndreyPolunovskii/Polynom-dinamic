import { Points } from './InterfacePoints'
import { GLOBAL_HEIGHT_CANVAS, GLOBAL_WIDTH_CANVAS } from '../GlobalConstants'
import { solverWrapper } from '../../logics/solver'

const ORDER_POLYNOM : number = 5
const AMOUNT_INIT_COND : number = 20

export const mockState : Points = {
  coeffPoints :
  [...Array(ORDER_POLYNOM)].map(()=>({
    x: Math.random() * GLOBAL_WIDTH_CANVAS,
    y: Math.random() * GLOBAL_HEIGHT_CANVAS
  })),
  rootPoints : [...Array(AMOUNT_INIT_COND)].map(()=>({
    x: Math.random() * GLOBAL_WIDTH_CANVAS,
    y: Math.random() * GLOBAL_HEIGHT_CANVAS
  }))
}
