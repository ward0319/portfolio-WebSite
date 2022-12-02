import React from 'react'
import { useState , useEffect} from 'react'
import "./Modal.scss"

const Modal = ({id , check ,setCheck , iconData}) => {
    const [title,setTitle] = useState()
    const [content,setContent] = useState([])
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
            setContent([{id:0,name:""}])
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