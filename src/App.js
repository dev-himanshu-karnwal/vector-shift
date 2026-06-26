import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import { usePaletteNodeAdd } from './hooks/usePaletteNodeAdd';

function App() {
  const {
    reactFlowWrapper,
    onInit,
    onDrop,
    onDragOver,
    addNodeFromPalette,
  } = usePaletteNodeAdd();

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header__brand">
          <p className="eyebrow">Workflow Builder</p>
          <h1 className="app-title">
            <em>VectorShift</em> Pipeline Editor
          </h1>
        </div>
        <SubmitButton />
      </header>
      <div className="app-body">
        <PipelineUI
          reactFlowWrapper={reactFlowWrapper}
          onInit={onInit}
          onDrop={onDrop}
          onDragOver={onDragOver}
        />
        <PipelineToolbar onTapAdd={addNodeFromPalette} />
      </div>
    </div>
  );
}

export default App;
