import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { formats, getFormats, getModules, modules } from "./quill-container";
import { useEffect, useState } from "react";

const QuillNoSSRWrapper = dynamic(() => import ('react-dom'), {ssr:false})

const QuillWrapper = (props) => {
    const [editorModules, setEditorModules] = useState();
    const [editorFormats, setEditorFormats] = useState();

    let editorComponent;
    if(!editorModules && !editorFormats) editorComponent = "Loading...";
    else {
        editorComponent(
          <QuillNoSSRWrapper
            modules={editorModules}
            formats={editorFormats}
            theme="snow"
          />
        );
    }

    useEffect(() => {
        const importConstants = async() => {
            const modules = await modules
            const formats = await formats
            console.log("modules", modules);
            setEditorModules(modules)
            setEditorFormats(formats)
        }
        return () => {
            importConstants;
        }
    }, [])

    

    return <div>{editorComponent}</div>;
}
 
export default QuillWrapper;