import React,{use, useState} from 'react'
import MonacoEditor from '@monaco-editor/react'
import AiReview from "./AiReview.jsx"
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
    const [loading,setLoading] = useState(false)
    const [review,setReview]=useState("")
    const handleReview = async () => {
      try{setLoading(true)
      const response = await fetch("http://localhost:1000/api/review",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({code:code})
      })
      const res = await response.json()
      if(!response.ok){
        throw new Error(res.message || "something went wrong")
      }
      console.log(res)
      setReview(res.review)
    }catch(err){
      setReview(err.message)
    }
    finally{
      setLoading(false)
    }
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
           height="50vh"
           width="165%"
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
              scrollBeyondLastColumn:false
           }
           }
           onChange={(value)=>{setCode(value)}}
          />
          <AiReview review={review}></AiReview>
          </div>
          </div>
        </>
      )
}
export default MEditor
