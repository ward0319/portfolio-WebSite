
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
                <a href='#about'>About</a>
            </li>
            <li onClick={onClickEvent}>
                <a href='#skills'>Skills</a>
            </li>
            <li onClick={onClickEvent}>
                <a href='#portfolio'>Portfolio</a>
            </li>
        </ul>
    </div>
  )
}
