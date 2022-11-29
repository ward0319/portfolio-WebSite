import React from 'react'
import { useState , useEffect} from 'react'
import "./Modal.scss"

const Modal = ({id , check ,setCheck}) => {
    const [title,setTitle] = useState()
    const handleModal = () => {
        setCheck((prev)=>!prev)
    }
    
    useEffect(()=>{
        if(id===0){
            setTitle("html")
        }
        else if(id===1){
            setTitle("css")
        }
        else if(id===2){
            setTitle("js")
        }
        else if(id===3){
            setTitle("react")
        }
        else if(id===4){
            setTitle("python")
        }
        else if(id===5){
            setTitle("aws")
        }
        else if(id===6){
            setTitle("sass")
        }
    },[id])
    return (
      <div>
        <div className={check ? "modal" : "black"} onClick={handleModal}>
          <div className='modal-container'>
            <h2 className='modal-title'>{title}</h2>
          </div>
        </div>        
      </div>
  )
}

export default Modal