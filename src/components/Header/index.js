import style from './style.module.css';
import { NavLink } from 'react-router-dom'; 
import { Layout, List } from 'antd';
import { AppleFilled, SearchOutlined, ShoppingOutlined } from '@ant-design/icons';

const { Header } = Layout;


function PageHeader() {
    return (
        <Header className={style.header}>
            
            <ul className={style.navigation}>
                <li className={style.li}> 
                    <NavLink to='/home' >
                        <AppleFilled className={style.pic}/>
                    </NavLink>
                </li>
                <li > <a href="localhost:3000" className={style.li}>Store</a> </li>
                <li > <a href="localhost:3000" className={style.li}>Mac</a> </li>
                <li > <a href="localhost:3000" className={style.li}>iPad</a> </li>
                <li > <a href="localhost:3000" className={style.li}>iPhone</a> </li>
                <li > <a href="localhost:3000" className={style.li}>Watch</a> </li>
                <li > <a href="localhost:3000" className={style.li}>AirPods</a> </li>
                <li > <a href="localhost:3000"  className={style.li}>TV & Home</a> </li>
                <li > <a href="localhost:3000" className={style.li}>Onle on Apple</a> </li>
                <li > <a href="localhost:3000" className={style.li}>Accessories</a> </li>
                <li > <a href="localhost:3000" className={style.li}>Support</a> </li>
                <li className={style.li}> 
                    <NavLink to='/search' >
                        <SearchOutlined className={style.pic}/>
                    </NavLink>
                </li>
                <li className={style.li}> 
                    <NavLink to='/cart' >
                        <ShoppingOutlined className={style.pic}/>
                    </NavLink>
                </li>
            </ul>           
            
        </Header>

    );
}

export default PageHeader;