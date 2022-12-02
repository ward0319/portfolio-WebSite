import React from 'react'
import { useState , useEffect} from 'react'
import { BsDot } from "react-icons/bs";
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
            setContent([{id:0,name:"HTML로 이루어져 있는 태그들의 사용용도를 이해"}])
        }
        else if(id===1){
            setTitle("CSS")
            setContent([{id:0,name:"DOM 요소들에 스타일링을 자유롭게 구현이 가능함"}])
        }
        else if(id===2){
            setTitle("JavaScript")
            setContent([{
                id:0,name:"웹 브라우저에서 인터프리터 역할로 주로 사용함"},{
                id:1,name:"JS에 데이터 구조를 이해하고 있음"},{
                id:2,name:"객체지향 언어라는 점을 알고 함수형으로 로직 작성을 선호"},{
                id:3,name:"JSON 방식으로 데이터를 다루는 것에 익숙함"}])
        }
        else if(id===3){
            setTitle("React")
            setContent([{id:0,name:"함수형 컴포넌트 작성을 선호"},
                {id:1,name:"state와 상태관리에 대해 이해"},
                {id:2,name:"CRUD 요청은 Axios를 통해 처리를 선호"},
                {id:3,name:"React의 여러 Hook을 사용을 선호"}])
        }
        else if(id===4){
            setTitle("Python")
            setContent([
                {id:0,name:"Python의 데이터 구조를 이해하고 있음"},
                {id:1,name:"특정 기능을 구현하는데 필요한 라이브러리를 생각하여 활용 가능"}])
        }
        else if(id===5){
            setTitle("AWS")
            setContent([{id:0,name:"EC2,와CloudFront를 활용하여 배포를 한 경험이 있음"}])
        }
        else if(id===6){
            setTitle("SASS")
            setContent([{id:0,name:"CSS 처리 방식들 중 제일 선호하는 방식"},{id:1,name:"변수를 활용하여 CSS 속성값 관리를 선호"}])
        }
    },[id])
    return (
      <div>
        {check ?
        <div>
            <div className='modal-container'>
                <h3 className='modal-title'>{title}</h3>
                <div className='modal-content'>
                    {content.map((data,index)=>{
                        return(
                            <p key={index} className='modal-contents'><BsDot></BsDot>{data.name}</p>
                        )
                    })}
                </div>
            </div>
            <div className={"modal"} onClick={handleModal}></div>
        </div> : null} 
      </div>
  )
}

export default Modal