import type { PlasmoGetInlineAnchor ,PlasmoCSUIProps} from "plasmo"
import {  useEffect, useState, type FC } from "react"
// import "./style.css"
import cssText from "data-text:~style.css"
import Layout from "~features/Layout"


export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}
 
export const getInlineAnchor: PlasmoGetInlineAnchor = async () => ({
      element: document.querySelector(".msg-form__msg-content-container"),
      insertPosition: "beforebegin"
})  

const AnchorTypePrinter: FC<PlasmoCSUIProps> = ({ anchor }) => {

  const [isFocused, setIsFocused] = useState(false);


  useEffect(() => {
    const element = anchor?.element;
    const editableDiv = element.querySelector('.msg-form__contenteditable');

    if (editableDiv) {
      const handleFocus = () => setIsFocused(true);
      

      editableDiv.addEventListener("focus", handleFocus);
      
    
      return () => {
        editableDiv.removeEventListener("focus", handleFocus);
        
      };
    }
  }, [anchor]);
 
  return <>
  
  {isFocused && <Layout anchor={anchor.element}/>}

  </>
}
 
export default AnchorTypePrinter