import { Stage, Layer, Circle, Rect, Text, Group } from 'react-konva'
import { useNineboxState } from './hooks/useNineboxState'

interface IProps {
  size?: number
}

export const NineBoxComponent: React.FC<IProps> = ({ size = 300 }) => {
  const { squareSize, getOffset, quadrants, handleDragEnd, circles } =
    useNineboxState({ size })

  return (
    <Stage width={size + 2} height={size + 2}>
      <Layer>
        {quadrants.map((e, i) => (
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

        {circles.map((e: any, i: number) => (
          <Group
            x={e.x}
            y={e.y}
            draggable
            onDragEnd={handleDragEnd}
            key={`circle-${i}`}
          >
            <Circle
              height={30}
              width={30}
              fill={e.color}
              shadowColor="black"
              shadowBlur={5}
              shadowOpacity={0.4}
              shadowOffsetX={3}
              shadowOffsetY={3}
            />

            <Text
              text={(i + 1).toString()}
              fontSize={9}
              fill="#FFFFFF"
              x={-5}
              y={-4}
            />
          </Group>
        ))}
      </Layer>
    </Stage>
  )
}
