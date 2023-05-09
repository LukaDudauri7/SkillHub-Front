import './Container.css';

function Container() {
    return (
        <div className='container'>
            <div className='job-opportunity'>
                <div className='div-block'>
                    <div className='hire'>
                        Hire the best <br /> 
                        freelaners for any job,<br /> 
                        online.</div>
                    <div className='div-flex'>
                        <button className='hire-freelancer'>Hire a Freelancer</button>
                        <button className='earn-money'>Earn Money Freelancing</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Container;