import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import { SidebarDrawerProvider } from './contexts/sidebar-drawer-context'

// @ts-ignore
import routes from '~react-pages'

function App() {
    return (
        <SidebarDrawerProvider>
            <Suspense fallback={<p>Loading...</p>}>
                {useRoutes(routes)}
            </Suspense>
        </SidebarDrawerProvider>
    )
}

export default App
