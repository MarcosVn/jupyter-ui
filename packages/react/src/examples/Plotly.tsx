import { createRoot } from 'react-dom/client';
import Jupyter from '../jupyter/Jupyter';
import Notebook from '../components/notebook/Notebook';
import NotebookToolbar from "./toolbars/NotebookToolbar";
import CellSidebarDefault from "../components/notebook/cell/sidebar/CellSidebarDefault";

import "./../../style/index.css";

const Plotly = () => (
  <Jupyter
    lite={false}
    useRunningKernelIndex={-1}
    startDefaultKernel={true}
    terminals={false}
  >
    <Notebook
      path="plotly.ipynb"
      uid="notebook-plotly-uid"
      height='calc(100vh - 2.6rem)' // (Height - Toolbar Height).
      cellSidebarMargin={120}
      CellSidebar={CellSidebarDefault}
      Toolbar={NotebookToolbar}
    />
  </Jupyter>
)

const div = document.createElement('div');
document.body.appendChild(div);
const root = createRoot(div)

root.render(
  <Plotly/>
);