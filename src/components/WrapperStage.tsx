import React from 'react'
import { Stage } from 'react-konva'
import { VisualMovePoints } from './GraphicComponents/VisualMovePoints'
import { GLOBAL_HEIGHT_CANVAS, GLOBAL_WIDTH_CANVAS } from './GlobalConstants'
import { Coordinates } from './GraphicComponents/Coordinates'
import cs from './WrapperStage.module.scss'

interface propInputParams {
  order: number
  queryInit: number
}

export const WrapperStage: React.FC<propInputParams> = ({order, queryInit}) => {
  return (
  <React.Fragment>
    <div className={cs.wrapper}>
      <div
        style={{ height: GLOBAL_HEIGHT_CANVAS, width: GLOBAL_WIDTH_CANVAS }}
        className={cs.wrapper_item}
        >
          <Stage
            height={GLOBAL_HEIGHT_CANVAS}
            width={GLOBAL_WIDTH_CANVAS}
            >
              <VisualMovePoints
                order={order}
                queryInit={queryInit}
               />
              <Coordinates />
            </Stage>
          </div>
        </div>
      </React.Fragment>
      )
    }
