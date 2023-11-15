import HomePage from '../pages/HomePage'
import BuilderPage from '../pages/BuilderPage'
import PageLayout from '../components/PageLayout/PageLayout'

export const routes_list = [
  {
    path: '/',
    element: <PageLayout Component={HomePage} />,
  },
  {
    path: '/builder',
    element: <PageLayout Component={BuilderPage} />,
  },
]
