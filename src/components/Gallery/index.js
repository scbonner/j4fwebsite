
import { render } from 'react-dom'
import React, { useState, useEffect } from 'react'
import shuffle from 'lodash/shuffle'
import useMeasure from './useMeasure'
import useMedia from './useMedia'
import data from './data'
import './styles.css'

function Gallery() {
  const columns = useMedia(['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'], [5, 4, 3], 2)
  const [bind, { width }] = useMeasure()
  const [items, set] = useState(data)
  useEffect(() => void setInterval(() => set(shuffle), 2000), [])

  let heights = new Array(columns).fill(0)
  const displayItems = items.map((child, i) => {
    const column = heights.indexOf(Math.min(...heights))
    const xy = [(width / columns) * column, (heights[column] += child.height) - child.height]
    return { ...child, xy, width: width / columns, height: child.height }
  })

  return (
    <div {...bind} class="list" style={{ height: Math.max(...heights) }}>
      {displayItems.map(({ css, xy, ...rest }) => (
        <div key={css} style={{ transform: `translate3d(${xy[0]}px,${xy[1]}px,0)`, ...rest }}>
          <div style={{ backgroundImage: css }} />
        </div>
      ))}
    </div>
  )
}


export default Gallery
