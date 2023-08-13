import { useEffect } from 'react';
import { useQuill } from 'react-quilljs';
import BlotFormatter from 'quill-blot-formatter';
import 'quill/dist/quill.snow.css';

import './style.css';

const Editor = () => {
  const { quill, quillRef, Quill } = useQuill({
    modules: { blotFormatter: {} }
  });

  if (Quill && !quill) {
    // const BlotFormatter = require('quill-blot-formatter');
    Quill.register('modules/blotFormatter', BlotFormatter);
  }

  useEffect(() => {
    if (quill) {
      quill.on('text-change', (delta, oldContents) => {
        console.log('Text change!');
        console.log(delta);
        let currrentContents = quill.root.innerHTML;
        console.log("HEREEEEEEEEEEE>>>>>>>>>>>>>>>>",currrentContents);
      });
    }
  }, [quill, Quill]);

  return (
    <div>
      <div ref={quillRef}  style={{height:'20rem',marginBottom:'2rem'}}/>
    </div>
  );
};

export default Editor;
