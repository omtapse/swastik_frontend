import { useEffect } from "react";
import { useQuill } from "react-quilljs";
import BlotFormatter from "quill-blot-formatter";
import "quill/dist/quill.snow.css";

import "./style.css";

const Editor = ({  onChange, fieldName, placeholder ,value  }) => {
  const { quill, quillRef, Quill } = useQuill({
    modules: { blotFormatter: {} },
    placeholder: placeholder,
    theme: "snow",
    value: value,
  });

  if (Quill && !quill) {
    // const BlotFormatter = require('quill-blot-formatter');
    Quill.register("modules/blotFormatter", BlotFormatter);
  }

  useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldContents) => {
        let currrentContents = quill.root.innerHTML;
        onChange(fieldName, currrentContents);
      });
    }
  }, [quill, Quill]);

  useEffect(() => { 
    if(value && quill && Quill){
      quill.root.innerHTML = value;
    }
  }, [quill, Quill]);
  return (
    <div>
      <div ref={quillRef} style={{ height: "20rem", marginBottom: "2rem" }} />
    
    </div>
  );
};

export default Editor;
