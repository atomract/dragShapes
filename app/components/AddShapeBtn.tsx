' use Client';


import React, { useState } from 'react'
import Moveable, {
    makeMoveable,
    DraggableProps,
    ScalableProps,
    RotatableProps,
    Rotatable,
    Draggable,
    Scalable
  } from "react-moveable";
  import MoveableHelper from "moveable-helper";

  

const AddShapeBtnPage = () => {

    const [helper] = React.useState(() => {
        return new MoveableHelper();
      });
      const targetRef = React.useRef<HTMLDivElement>(null);       // target ref for moveable div
    const shapeElement = <div className='bg-zinc-500 w-80 h-24 mt-10'></div>
    const [shapes, setShapes] = useState<React.JSX.Element[]>([])   // shapes state array to store shapes
    const [view, setView] = useState(false)        // state to set preview of shapes
  

    const handleOnClick = () => {
        // adding shapes to a state array
        setShapes([...shapes, shapeElement]);
        console.log(shapes)
    }

  return (
    <div>
        <div className='flex flex-row'>
            {/* buttons for adding a shape and preview */}
            <button onClick={handleOnClick} className='flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'>
                Add a shape
        
            </button>
            <button onClick={() => setView(!view)} className='mx-10 flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'>
                Preview 
            </button>
        </div>


        {/* mapping through array of shapes to get all the shapes  */}
        {shapes.map((e: any, i: any) => {
            return(
            <div className='animate-pulse duration-700'>
                <div className="target" ref={targetRef} key={i}>
                    {e}
                </div>

                {/* movable component to make shape moveable and view to make the preview possible */}
                {!view ? <Moveable
                    target={targetRef}
                    draggable={true}
                    scalable={true}
                    keepRatio={true}
                    rotatable={true}
                    onDragStart={helper.onDragStart}
                    onDrag={helper.onDrag}
                    onScaleStart={helper.onScaleStart}
                    onScale={helper.onScale}
                    onRotateStart={helper.onRotateStart}
                    onRotate={helper.onRotate}
                /> : null
            }
            </div>
            )
        })}
    </div>
  )
}

export default AddShapeBtnPage;