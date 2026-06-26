import { useRef, useCallback } from 'react';
import { useStore } from '../store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
  getNodeID: state.getNodeID,
  addNode: state.addNode,
});

const getInitNodeData = (nodeID, type) => ({
  id: nodeID,
  nodeType: `${type}`,
});

export function usePaletteNodeAdd() {
  const reactFlowWrapper = useRef(null);
  const reactFlowInstance = useRef(null);
  const { getNodeID, addNode } = useStore(selector, shallow);

  const addNodeFromPalette = useCallback(
    (type, clientX, clientY) => {
      const instance = reactFlowInstance.current;
      const wrapper = reactFlowWrapper.current;
      if (!instance || !wrapper || !type) return;

      const bounds = wrapper.getBoundingClientRect();
      const x = clientX ?? bounds.left + bounds.width / 2;
      const y = clientY ?? bounds.top + bounds.height / 2;

      const position = instance.project({
        x: x - bounds.left,
        y: y - bounds.top,
      });

      const nodeID = getNodeID(type);
      addNode({
        id: nodeID,
        type,
        position,
        data: getInitNodeData(nodeID, type),
      });
    },
    [getNodeID, addNode]
  );

  const onInit = useCallback((instance) => {
    reactFlowInstance.current = instance;
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const raw = event.dataTransfer?.getData('application/reactflow');
      if (!raw) return;

      const { nodeType } = JSON.parse(raw);
      if (!nodeType) return;

      addNodeFromPalette(nodeType, event.clientX, event.clientY);
    },
    [addNodeFromPalette]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  return {
    reactFlowWrapper,
    onInit,
    onDrop,
    onDragOver,
    addNodeFromPalette,
  };
}
