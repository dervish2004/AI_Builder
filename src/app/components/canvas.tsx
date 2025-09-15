'use client'

import React, { useState, useRef } from 'react';
import { useDrop } from 'react-dnd';

const ItemTypes = {
  BLOCK: 'block',
};

// Define a type for dropped items
interface BlockItem {
  id: string;
  content: React.ReactNode;
}

export function Canvas() {
  const [page, setPage] = useState<BlockItem[]>([]);

  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop<BlockItem>(() => ({
    accept: ItemTypes.BLOCK,
    drop: (item: BlockItem) => {
      setPage((prevPage) => [...prevPage, item]);
    },
  }));

  drop(ref);

  return (
    <div
      ref={ref}
      className="flex-1 p-8 bg-white"
    >
      {page.length === 0 ? (
        <p className="text-gray-400 text-center">
          Drag and drop blocks here to build your page.
        </p>
      ) : (
        page.map((block) => (
          <div key={block.id} className="p-4 mb-4 border rounded bg-gray-100">
            {block.content}
          </div>
        ))
      )}
    </div>
  );
}
