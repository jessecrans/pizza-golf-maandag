import React from 'react'

const PageLayout = ({
  title,
  children
}: Readonly<{
  title: string,
  children: React.ReactNode
}>) => {
  return (
    <main className='border-2 border-green-400 m-2 rounded'>
      <h1 className='bg-green-400 px-4 py-1 text-yellow-200 text-center text-xl font-bold uppercase'>
        {title}
      </h1>
      <div className='bg-green-700 bg-opacity-50 p-4 text-white'>
        {children}
      </div>
    </main>
  )
}

export default PageLayout