import style from './style.module.css';

function Footer() {
    return (
    <div className={style.footer}>
        <div>
            <span>© 2021 Company, Inc</span>
        </div>
        <ul className={style.nav}>
            <li >
                <a href="localhost:3000" className={style.li} >Home</a>
            </li>
             <li>
                <a href="localhost:3000" className={style.li}>FAQs</a>
            </li>
            <li>
                <a href="localhost:3000" className={style.li}>Pricing</a>
            </li>
            <li>
                <a href="localhost:3000" className={style.li}>About us</a>
            </li>
        </ul>
    </div>
    )
}



export default Footer;