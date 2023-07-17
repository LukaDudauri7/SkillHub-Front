import React from 'react'
import { Navigate, Link } from 'react-router-dom';
import './HowItWorks.css';
import Header from '../Header/Header';


function HowItWorks() {
    return (
        <div className='container'>
            <Header />
            <div className='background'>
                <div className="heaederText">
                    როგორ შეუძლიათ ფრილანსერებს დაეხმარონ შენ ბიზნესს?
                </div>
                <div className="middleText">
                    შესაძლებლობლები უსაზღვროა. ჩვენ გვყავს გამოცდილი ფრილანსერები, რომლებიც მუშაობენ ყველა ტექნიკურ, პროფესიულ და შემოქმედებით სფეროში, რომლის წარმოდგენაც კი შეიძლება.
                </div>
                <Link className='addProject' to="/postproject">Post a Project</Link>
            </div>
        </div>
    )
}

export default HowItWorks