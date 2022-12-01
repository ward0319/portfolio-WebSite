import React from 'react'
import { useState , useEffect} from 'react'
import "./Modal.scss"

const Modal = ({id , check ,setCheck , iconData}) => {
    const [title,setTitle] = useState()
    const [content,setContent] = useState("")
    const handleModal = () => {
        setCheck((prev)=>!prev)
    }
    
    useEffect(()=>{
        if(id===0){
            setTitle("HTML")
            setContent("")
        }
        else if(id===1){
            setTitle("CSS")
            setContent("")
        }
        else if(id===2){
            setTitle("JavaScript")
            setContent("자바스크립트의 전반적인 이해도를 갖고 있으며, 웹 브라우저에 인터프리터가 내장되어 있음을 알고 있습니다. 또한 JSON과 Object를 이용한 데이터 활용에 어색함이 전혀 없으며 비동기적 언어라는 것을 인지하고 있습니다.")
        }
        else if(id===3){
            setTitle("React")
            setContent("")
        }
        else if(id===4){
            setTitle("Python")
            setContent("")
        }
        else if(id===5){
            setTitle("AWS")
            setContent("")
        }
        else if(id===6){
            setTitle("Sass")
            setContent("")
        }
    },[id])
    return (
      <div>
        {check ?
        <div>
            <div className='modal-container'>
                <h3 className='modal-title'>{title}</h3>
                <div className='modal-content'>
                    <p className='modal-contents'>{content}</p>
                </div>
            </div>
            <div className={"modal"} onClick={handleModal}></div>
        </div> : null} 
      </div>
  )
}

export default Modal