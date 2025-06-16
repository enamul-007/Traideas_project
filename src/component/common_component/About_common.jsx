import React from 'react'

const About_common = ( {title , heading} ) => {
  return (
    <div>
        <div>
          
            <h1 className='xl:font-bold lg:text-4xl font-open_sans xs:text-base xs:font-normal lg:font-semibold'>{title}</h1>
            <p className='xl:font-semibold xl:text-base xl:pt-4 font-open_sans xs:text-xs xs:font-normal xs:pt-0 lg:font-semibold lg:pt-3 lg:text-base'>{heading}</p>
        </div>
    </div>
  )
}

export default About_common