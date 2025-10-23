import React from 'react'
import TopHead from './TopHead'

const Bottom = () => {
  return (
    <div>
        <TopHead
         heading='Get started with ServiceBook'
         subheading='Join thousands of businesses using ServiceBook to manage their services and grow their customer base.'
         />
        <div>
            <button>Get Started</button>
            <button>Contact Sales</button>
        </div>
        <hr/>
        <div>
            <div> icon<p>10,000+ users</p></div>
            <div>icon <p>50+ cites</p></div>
            <div>icon<p>4.9 rating</p></div>
        </div>
    
    </div>
  )
}

export default Bottom