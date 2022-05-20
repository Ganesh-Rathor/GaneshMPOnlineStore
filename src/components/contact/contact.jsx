import React from 'react';
import "./contact.css"

function contact() {
  return (
    <div className='contact'>
         <form action="mailto:ganesh@ganeshonlinestore.new" method="get" enctype="text/plain">
            <h1>मुझसे संपर्क करें</h1>
            <input type="text" className="gmail" placeholder='Enter Your Gmail...'/>
            <input type="text" className="phone" placeholder='Enter Your Phone number....' />
            <input type="text" className="title" placeholder='Enter the Title'/>
            <textarea type="text" className="matter" placeholder='Enter the Matter... '></textarea>
            <button className='submit-btn' type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default contact;