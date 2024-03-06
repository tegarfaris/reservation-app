import React, { ReactNode } from 'react'

const DashboardLayout: React.FC<{children: ReactNode}> = ({children}) => {
  return (
    <>
    <main>
        <header>Dashboard</header>
        <div>{children}</div>
    </main>
    </>
  )
}

export default DashboardLayout