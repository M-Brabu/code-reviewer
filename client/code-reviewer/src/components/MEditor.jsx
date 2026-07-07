import React,{useState} from 'react'
import MonacoEditor from '@monaco-editor/react'
const MEditor = () =>{
    let [lang,setLang]=useState("javascript");
    let [theme,setTheme]=useState("vs");
        const languages = [
  "javascript",
  "java",
  "python",
  "cpp",
  "c",
  "typescript",
  "html",
  "css",
  "json",
    ];
    const themes=["vs","vs-dark","hc-black"]
   
      return(
        <>
        <div className='editor-langtheme'>
          <div><div className='lang-theme'> 
          <select onChange={(e)=>{setLang(e.target.value)}} value={lang} id="">
            {languages.map((lang)=>(<option value={lang}>{lang}</option>))}
          </select>
          <select onChange={(e)=>{setTheme(e.target.value)}} value={theme}>
            {themes.map((theme)=>(<option value={theme}>{theme}</option>))}
          </select>
       </div>
       </div>
       <div>
          <MonacoEditor
           height="75vh"
           width="100%"
           theme={theme}
           loading={<h1>CODE EDITOR LOADING</h1>}
           language={lang}
           defaultValue='Switch To Programming Language You are Using....and paste it here'
           options={{
              fontSize:16,
              minimap:{enabled:true},
              wordWrap:'on',
              lineNumbers:'on',
              cursorStyle:"block",
              readOnly:false,
              automaticLayout:true,
              formatOnPaste:true,
           }
           }
          />
          <button className='revbtn'>Review</button>
          </div>
          </div>
        </>
      )
}
export default MEditor
