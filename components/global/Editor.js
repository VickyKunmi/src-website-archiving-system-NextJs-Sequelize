import dynamic from "next/dynamic";
import { useRef } from "react";
import "suneditor/dist/css/suneditor.min.css";
import styles from "../../styles/admin/NewsForm.module.css";
const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});


export const Editor = ({setEvent}) => {
  const editorRef = useRef();

  return (
    <>
      <SunEditor
      
            autoFocus={true}
            ref={editorRef}
            placeholder="Write your news here..."
            lang="en"
            height="300"
            onChange={setEvent}
            setOptions={{
              // className="suneditor"
              // plugins: plugins,
              // imageAccept: upl,
              buttonList: [
                [
                  // plugins.image,
                  "undo",
                  "redo",
                  "bold",
                  "audio",
                  "video",
                  "underline",
                  // "image",
                  "italic",
                  "strike",
                  "list",
                  "align",
                  "formatBlock",
                  "fontSize",
                  "table",
                  "font",
                  "save",
                  "fontColor",
                  "link",
                  "outdent",
                  "indent",
                  "fullScreen",
                  "showBlocks",
                  "codeView",
                  "preview",
                  // "imageGallery"
                  "list",
                  
                  
                ],
              ],
            }}
          />
    </>
  )
}


