import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
    return(
        <div className="app-sidenav">
            <ul className="nav flex-column">
                
                <Link href="/courses/courses">
                    <li className="nav-item">
                        <a className="nav-link">Courses</a>
                    </li>
                </Link>            
                <Link href="/projects">
                    <li className="nav-item">
                        <a className="nav-link">О Фабрике</a>
                    </li>
                </Link>      
                <Link href="/machines">
                    <li className="nav-item">
                        <a className="nav-link">Карта</a>
                    </li>
                </Link>      
                <Link href="/apply">
                    <li className="nav-item">
                        <a className="nav-link">Контакты</a>
                    </li>
                </Link>
                <Link href="/people">
                    <li className="nav-item">
                        <a className="nav-link">Команда</a>
                    </li>
                </Link>
                <Link href="/tools-search">
                    <li className="nav-item">
                        <a className="nav-link">Search</a>
                    </li>
                </Link>                
            </ul>
        </div>
    )
}
