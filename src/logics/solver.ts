import { SolverFunc } from './InterfacesSolver'
import { Point } from '../components/GraphicComponents/InterfacePoints'
import { Complex } from './complex'
import { polynom, diff_polynom } from './solvertools'
import { GLOBAL_HEIGHT_CANVAS, GLOBAL_WIDTH_CANVAS ,ALPHA} from '../components/GlobalConstants'

export const solverWrapper : SolverFunc = (points) => {
  let newPoints = {...points}
  let roots = newPoints.rootPoints
  let coeffs = newPoints.coeffPoints

  roots = ChangeCoordinates(roots)
  coeffs = ChangeCoordinates(coeffs)
  newPoints.rootPoints = solver(
    Complexification(roots),
    Complexification(coeffs)
  )
  newPoints.rootPoints = UnChangeCoordinates(newPoints.rootPoints)
  console.log(newPoints.rootPoints[0])
  return newPoints
}

/////////////////////////////////////////
const ChangeCoordinates = (items :Point[]) => {
  return items.map(item => ({
      x : (item.x/ALPHA - GLOBAL_WIDTH_CANVAS/2),
      y : (item.y/ALPHA - GLOBAL_HEIGHT_CANVAS/2)
  }));
}

/////////////////////////////////////////
const UnChangeCoordinates = (items :Point[]) => {
  return items.map(item => ({
      x : (item.x + GLOBAL_WIDTH_CANVAS/2)*ALPHA,
      y : (item.y + GLOBAL_HEIGHT_CANVAS/2)*ALPHA
  }));
}

/////////////////////////////////////////
const Complexification = (items :Point[]) => {
let complexItems : Complex[] = []
items.forEach(item =>{
  complexItems.push(new Complex(item.x,item.y))
})
return complexItems
}

/////////////////////////////////////////
const UnComplexification = (items :Complex[]) => {
let pointItems : Point[] = []
items.forEach(item =>{
  pointItems.push({ x:item.x, y:item.y })
})
return pointItems
}

//////////////////////////////////////////////
//Метод Ньютона
const solver = (cRoots : Complex[], cCoeffs : Complex[]) => {
const N = 4;
const NewcRoots : Complex[] = []
cRoots.forEach( root => {
  let __root = root
  for (let k = 0; k < N; k ++ )
    __root = __root.sub( polynom(__root,cCoeffs).div(diff_polynom(__root,cCoeffs)) )
  NewcRoots.push(__root)
} )
return UnComplexification(NewcRoots)
}
