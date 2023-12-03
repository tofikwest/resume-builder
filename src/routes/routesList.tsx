import HomePage from '../pages/HomePage/HomePage'
import BuilderPage from '../pages/BuilderPage/BuilderPage'
import PageLayout from '../components/PageLayout/PageLayout'
import HomePageLayout from '../components/PageLayout/HomePageLayout'

export const routes_list = [
  {
    path: '/',
    element: <HomePageLayout Component={HomePage} />,
  },
  {
    path: '/builder',
    element: <PageLayout Component={BuilderPage} />,
  },
]
