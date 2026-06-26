// ui.js
// Displays the drag-and-drop UI
// --------------------------------------------------

import { useCallback } from 'react';
import ReactFlow, { Controls, Background, MiniMap } from 'reactflow';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import { nodeTypes } from './nodes';
import { useTouchLike } from './hooks/useTouchLike';

import 'reactflow/dist/style.css';

const gridSize = 24;
const proOptions = { hideAttribution: true };

const defaultEdgeOptions = {
  type: 'smoothstep',
  animated: true,
  style: { stroke: '#C8C8C8', strokeWidth: 1.5 },
};

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export const PipelineUI = ({
  reactFlowWrapper,
  onInit,
  onDrop,
  onDragOver,
}) => {
  const isTouchLike = useTouchLike();
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useStore(
    selector,
    shallow
  );

  const handleInit = useCallback(
    (instance) => {
      onInit(instance);
    },
    [onInit]
  );

  return (
    <div
      ref={reactFlowWrapper}
      className={`canvas-wrapper${isTouchLike ? ' canvas-wrapper--touch' : ''}`}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onInit={handleInit}
        nodeTypes={nodeTypes}
        proOptions={proOptions}
        snapGrid={[gridSize, gridSize]}
        connectionLineType="smoothstep"
        defaultEdgeOptions={defaultEdgeOptions}
        panOnScroll={!isTouchLike}
        zoomOnScroll={!isTouchLike}
        zoomOnPinch={true}
        zoomOnDoubleClick={false}
        preventScrolling={true}
        connectionRadius={isTouchLike ? 36 : 20}
        autoPanOnConnect={true}
        autoPanOnNodeDrag={true}
        nodesDraggable={true}
        nodesConnectable={true}
        elementsSelectable={true}
        deleteKeyCode={isTouchLike ? null : 'Backspace'}
      >
        <Background variant="dots" color="#D4D4D4" gap={gridSize} size={1} />
        <Controls />
        {!isTouchLike && <MiniMap />}
      </ReactFlow>
    </div>
  );
};
