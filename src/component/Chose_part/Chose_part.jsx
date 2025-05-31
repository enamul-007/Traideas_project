import React from 'react'
import Common_overlay from '../common_component/Common_overlay'

const Chose_part = () => {
  return (
    <div  className='bg-black_color'>
        <div className="container">
            <div>
                <div className='pt-[72px]'>
                    <Common_overlay
                    title="Why Chose Us"
                    style={{color:"white"}}
                    />
                </div>
              <div className='pt-9'>
              <h3 className='text-3xl font-bold font-open_sans text-white_text_color '>
                Heading of your choice
                </h3>
                <p className='text-base font-semibold font-open_sans text-white_text_color pt-9 w-[520px] text-justify'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in   
                </p>
              </div>
              
            </div>
        </div>
    </div>
  )
}

export default Chose_part