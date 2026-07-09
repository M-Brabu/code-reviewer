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
    let [code,setCode] = useState("console.log(`Hello`)")
    const handleReview = async () => {
      const response = await fetch("http://localhost:1000/api/review",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({code:code})
      })
      const res = await response.json()
      console.log(res)
    }
      return(
        <>
        <div className='editor-langtheme'>
          <div><div className='lang-theme'> 
          <select onChange={(e)=>{setLang(e.target.value)}} value={lang} id="Lselect">
            {languages.map((lang)=>(<option value={lang}>{lang}</option>))}
          </select>
          <select onChange={(e)=>{setTheme(e.target.value)}} value={theme} id='Tselect'>
            {themes.map((theme)=>(<option value={theme}>{theme}</option>))}
          </select>
           <button className='revbtn' onClick={handleReview}>Review</button>
       </div>
       </div>
       <div>
          <MonacoEditor
           height="75vh"
           width="107%"
           theme={theme}
           loading={<h1>CODE EDITOR LOADING</h1>}
           language={lang}
           defaultValue={code}
           defaultLanguage='javascript'
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
           onChange={(value)=>{setCode(value)}}
          />
         
          </div>
          </div>
        </>
      )
}
export default MEditor
