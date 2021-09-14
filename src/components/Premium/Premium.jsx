import React from 'react';
import './Premium.scss'
import crown from '../../assets/svg/crown.svg'

// plan icons

import bronze from '../../assets/svg/plans/bronze.svg'
import silver from '../../assets/svg/plans/silver.svg'
import gold from '../../assets/svg/plans/gold.svg'
import recommended from '../../assets/svg/plans/recommended.svg'
import active from '../../assets/svg/plans/active.svg'
import inactive from '../../assets/svg/plans/inactive.svg'

function Premium() {

    const options = {
        bronze: [
            {active: true, option: 'Option'},
            {active: true, option: 'Option'},
            {active: false, option: 'Option'},
            {active: false, option: 'Option'},
            {active: false, option: 'Option'},
        ],
        silver: [
            {active: true, option: 'Option'},
            {active: true, option: 'Option'},
            {active: true, option: 'Option'},
            {active: false, option: 'Option'},
            {active: false, option: 'Option'},
        ],
        gold: [
            {active: true, option: 'Option'},
            {active: true, option: 'Option'},
            {active: true, option: 'Option'},
            {active: true, option: 'Option'},
            {active: true, option: 'Option'},
        ],
    }

    const plans = [
        {id: 1, name: 'Bronzas Plāns', price: '3,99', icon: bronze, options: options.bronze},
        {id: 2, name: 'Zelta Plāns', recommended: true, price: '7,99', icon: gold, options: options.gold},
        {id: 3, name: 'Sudraba Plāns', price: '5,99', icon: silver, options: options.silver}
    ]

    return (
        <div className='premium'>
            <h1 className='premium__title'>
                <img src={crown} alt="Crown" />
                Prēmiju cenu Plāni    
            </h1>            
            <p className='premium__desc'>
                Šeit var iegādāties mūsu premium tarifus. Tas dos Jums jaunus Premium funkcijas, kuri atvērs jaunu 
                Youth Deal funkcionalitāti. Esiet augšpusē ar Premium!    
            </p>            
        
            <div className="premium__plans">
                {plans.map((plan, i) => (

                    <div key={i} id={plan.name} className="premium__plans__plan" style={ plan.recommended && {height: "650px"}}>
                  
                        {plan.recommended &&
                            <div className="premium__plans__plan__recommended">
                                <img src={recommended} alt="" />
                            </div>
                        }

                        <div className="premium__plans__plan__icon">
                            <img style={plan.recommended && {width: '100px'}} src={plan.icon} alt={plan.name} />
                        </div>

                        <p className="premium__plans__plan__name">{plan.name}</p>

                        <div className="premium__plans__plan__price">
                            <p>€{plan.price}</p> <small>/mēnesī</small>
                        </div>

                        <div className="premium__plans__plan__options">
                            {plan.options.map((option, i) => (
                                <div key={i} className="premium__plans__plan__options__option">
                                    
                                    {option.active ? <img src={active} alt="active" /> : <img src={inactive} alt="inactive" />}
                                    
                                    <p>{option.option}</p>
                                
                                </div>
                            ))}
                        </div>

                        <button className='premium__plans__plan__buy'>Pirkt</button>

                    </div>
                ))}
            </div>

        </div>
    )
}

export default Premium;