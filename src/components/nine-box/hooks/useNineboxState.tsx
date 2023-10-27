import { Vector2d } from 'konva/lib/types'
import { useState } from 'react'

export const useNineboxState = ({ size }: any) => {
  const squareSize = size / 3

  const [circles, setCircles] = useState([
    { x: 50, y: 40, image: '', color: '#000' },
    { x: 150, y: 140, image: '', color: '#000' },
    { x: 250, y: 230, image: '', color: '#000' },
  ])

  const cuadrants = [
    { label: '1', color: '#FFC3A0' },
    { label: '2', color: '#FFECB3' },
    { label: '3', color: '#B5EAD7' },
    { label: '4', color: '#B2CCD6' },
    { label: '5', color: '#E8E8E8' },
    { label: '6', color: '#FFD3B6' },
    { label: '7', color: '#B5B8D3' },
    { label: '8', color: '#E0B0B3' },
    { label: '9', color: '#7FBAE3' },
  ]

  const getOffset = (i: number): Vector2d => {
    let offset = { x: 0, y: 0 } as Vector2d
    if (i === 0) offset = { x: 0, y: 0 }
    if (i === 1) offset = { x: squareSize * i, y: 0 }
    if (i === 2) offset = { x: squareSize * i, y: 0 }
    if (i === 3) offset = { x: squareSize * (i - 3), y: squareSize * 1 }
    if (i === 4) offset = { x: squareSize * (i - 3), y: squareSize * 1 }
    if (i === 5) offset = { x: squareSize * (i - 3), y: squareSize * 1 }
    if (i === 6) offset = { x: squareSize * (i - 3 * 2), y: squareSize * 2 }
    if (i === 7) offset = { x: squareSize * (i - 3 * 2), y: squareSize * 2 }
    if (i === 8) offset = { x: squareSize * (i - 3 * 2), y: squareSize * 2 }
    return offset
  }

  const handleDragEnd = (_e: any) => {
    setCircles(
      circles.map((circle) => {
        return { ...circle }
      })
    )
    console.log(_e)
    alert('Cambio')
  }

  return {
    circles,
    squareSize,
    handleDragEnd,
    cuadrants,
    getOffset,
  }
}
