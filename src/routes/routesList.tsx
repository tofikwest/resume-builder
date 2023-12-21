import PageLayout from '../components/PageLayout/PageLayout'
import HomePageLayout from '../components/PageLayout/HomePageLayout'
import { lazy, Suspense } from 'react'
import Skeletom from '../components/MyResume/Skeletom.tsx'

const BuilderPage = lazy(() => import('../pages/BuilderPage/BuilderPage'))
const HomePage = lazy(() => import('../pages/HomePage/HomePage.tsx'))

export const routes_list = [
  {
    path: '/',
    element: (
      <Suspense fallback={<Skeletom />}>
        <HomePageLayout Component={HomePage} />
      </Suspense>
    ),
  },
  {
    path: '/builder',
    element: (
      <Suspense fallback={<Skeletom />}>
        <PageLayout Component={BuilderPage} />
      </Suspense>
    ),
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<Skeletom />}>
        <HomePageLayout Component={HomePage} />
      </Suspense>
    ),
  },
]
