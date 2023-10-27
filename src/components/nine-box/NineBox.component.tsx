import { Stage, Layer, Circle, Rect } from 'react-konva'
import { useNineboxState } from './hooks/useNineboxState'

interface IProps {
  size?: number
}

export const NineBoxComponent: React.FC<IProps> = ({ size = 300 }) => {
  const { squareSize, getOffset, cuadrants, handleDragEnd, circles } =
    useNineboxState({ size })

  return (
    <Stage width={size + 2} height={size + 2}>
      <Layer>
        {cuadrants.map((e, i) => (
          <Rect
            key={i}
            height={squareSize}
            width={squareSize}
            x={getOffset(i).x}
            y={getOffset(i).y}
            fill={e.color}
            stroke={'#FFF'}
            strokeWidth={2}
            cornerRadius={10}
          />
        ))}

        {circles.map((e: any) => (
          <Circle
            height={30}
            width={30}
            draggable
            fill={e.color}
            x={e.x}
            y={e.y}
            onDragEnd={handleDragEnd}
            shadowColor="black"
            shadowBlur={5}
            shadowOpacity={0.4}
            shadowOffsetX={3}
            shadowOffsetY={3}
          />
        ))}
      </Layer>
    </Stage>
  )
}
