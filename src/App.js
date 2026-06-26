import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header__brand">
          <p className="eyebrow">Workflow Builder</p>
          <h1 className="app-title">
            Pipeline <em>Editor</em>
          </h1>
        </div>
        <SubmitButton />
      </header>
      <div className="app-body">
        <main className="app-main">
          <PipelineUI />
        </main>
        <PipelineToolbar />
      </div>
    </div>
  );
}

export default App;
