import React from 'react'

const HeaderBox = ({user,type="title",title,  subtext,}:HeaderBoxProps) => {
  console.log(user)
  return (
    <div className ="header-box">
        <h1 className='header-box-title'>
            {title}
            {type === "greeting" &&(
                <span className='text-bankGradient'>
                    &nbsp;{ user ? user : 'Guest'}
                </span>

            )}
        </h1>
    <p className='header-box-subtext'>{subtext}</p>
    </div>
  )
}

export default HeaderBox
