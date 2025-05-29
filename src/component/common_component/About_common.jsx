import React from 'react'

const About_common = ( {title , heading} ) => {
  return (
    <div>
        <div>
            <h1 className='text-4xl font-bold font-open_sans'>{title}</h1>
            <p className='pt-4 text-base font-semibold font-open_sans'>{heading}</p>
        </div>
    </div>
  )
}

export default About_common