import { useState, useEffect } from 'react';
import { INotebookContent } from '@jupyterlab/nbformat';
import InputViewer from './input/InputViewer';
import OutputViewer from './output/OutputViewer';
import { newUuid } from './../../jupyter/utils/Ids';

type Props = {
  nbformat: INotebookContent,
  outputs: boolean,
}

const Viewer = (props: Props) => {
  const { nbformat, outputs } = props;
  const [model, setModel] = useState<INotebookContent>()
  useEffect(() => {
    setModel(nbformat);
  }, [nbformat])
  return (
    <>
      {model?.cells.map(cell => {
        return (
          <div key={cell.id?.toString() || newUuid()}>
            <InputViewer cell={cell} languageInfo={nbformat.metadata.language_info}/>
            { outputs && <OutputViewer cell={cell}/> }
          </div>
        )
      })}
    </>
  );
}

export default Viewer;