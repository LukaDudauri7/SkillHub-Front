import { useState } from 'react';
import './Container.css';

function Container() {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className='container'>
            <div className={isActive ? 'job-opportunity' : 'hire-opportunity'}>
                <div className='div-block'>
                    <div className={isActive ? 'hire' : 'hire white'}>Hire the best <br /> freelaners for any job,<br /> online.</div>
                    <div className='div-flex'>
                        <button className='hire-freelancer' onClick={()=>setIsActive(true)}> Hire a Freelancer</button>
                        <button className='earn-money'  onClick={()=>setIsActive(false)}> Earn Money Freelancing</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Container;