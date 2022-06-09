
import "./menu.scss" 

export default function Menu({menuOpens,setMenuOpens}) {
    const onClickEvent = () => {
        setMenuOpens(!menuOpens)
    }
  return (
    <div className={'menu '+(menuOpens && "active")}>
        <ul>
            <li onClick={onClickEvent}>
                <a href='#intro'>Home</a>
            </li>
            <li onClick={onClickEvent}>
                <a href='#portfolio'>Portfolio</a>
            </li >
            <li onClick={onClickEvent}>
                <a href='#works'>Works</a>
            </li>
            <li onClick={onClickEvent}>
                <a href='#testimonials'>Testimonials</a>
            </li>
            <li onClick={onClickEvent}>
                <a href='#contact'>Contact</a>
            </li>
        </ul>
    </div>
  )
}
