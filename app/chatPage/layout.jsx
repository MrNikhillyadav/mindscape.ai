import React from 'react'
import ChatInterface from './_components/ChatInterface'

function DashboardLayout({children}) {
  return (
    <div>
        {/* <Header/> */}
        <div className='mx-5 border md:mx-20 lg:mx-36'>
            {children}
            {/* <ChatInterface/> */}

            
        </div>
    </div>
  )
}

export default DashboardLayout