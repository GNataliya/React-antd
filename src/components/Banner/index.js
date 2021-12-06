import style from './style.module.css';
import { RightOutlined } from '@ant-design/icons';

function Banner() {
    return (
        <div className={style.banner}>
            <p>Shop early for the best selection of holiday favorites. 
                <a href="localhost:3000" className={style.li}> Shop now 
                <RightOutlined className={style.icon}/>
                </a>
            </p>
        </div>
        
    );
}

export default Banner;