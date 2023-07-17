import { useState } from 'react';
import './Container.css';

function Container() {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className='container'>
            <div className={isActive ? 'job-opportunity' : 'hire-opportunity'}>
                <div className='div-block'>
                    <div className={isActive ? 'hire' : 'hire white'}>დაიქირავე საუკეთესო  ფრილანსერები<br /> ნებისმიერი საქმისთვის,<br /> ონლაინ.</div>
                    <div className='div-flex'>
                        <button className='hire-freelancer' onClick={()=>setIsActive(true)}>დაიქირავე ფრილანსერი</button>
                        <button className='earn-money'  onClick={()=>setIsActive(false)}> გამოიმუშავე ფული ფრილანსინგით</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Container;