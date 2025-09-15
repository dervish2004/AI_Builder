'use client'
import React, { useRef } from 'react';
import { useDrag } from 'react-dnd';

const ItemTypes = {
  BLOCK: 'block',
} as const;

interface BlockDragItem {
  id: number;
  type: string;
  content: string;
}

export function Sidebar() {
  // create a ref for the DOM element
  const dragRef = useRef<HTMLDivElement | null>(null);

  // typed useDrag: <DragItem, DropResult, CollectedProps>
  const [{ isDragging }, drag] = useDrag<BlockDragItem, void, { isDragging: boolean }>(() => ({
    type: ItemTypes.BLOCK,
    item: { id: 1, type: 'text-block', content: 'This is a text block.' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  // attach the drag connector to the ref object
  drag(dragRef);

  const opacity = isDragging ? 0.4 : 1;

  return (
    <div
      ref={dragRef}
      className="w-64 p-4 border-r bg-gray-100"
      style={{ opacity }}
    >
      Text Block
    </div>
  );
}
