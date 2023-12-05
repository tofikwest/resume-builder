import { describe, it } from 'vitest'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from '@testing-library/react'
import PageLayout from '../../../components/PageLayout/PageLayout'
import BuilderPage from '../BuilderPage'
import { Provider } from 'react-redux'
import { store } from '../../../redux/store'

// * TODO write test
describe('BuilderPageLayout tests', () => {
  it('Redirecting BuilderPage ', async () => {
    render(
      <Provider store={store}>
        <PageLayout Component={BuilderPage} />
      </Provider>,
      { wrapper: BrowserRouter },
    )
    // globalThis.innerWidth = 768

    // const user = userEvent.setup()

    // const builderBtn = screen.getByTestId('builderBtn')

    // await user.click(builderBtn)

    // await waitFor(async () => {
    //   const downloadBtn = screen.getByTestId('downloadBtn')
    //   await user.click(downloadBtn)
    //   expect(downloadBtn).toBeInTheDocument()
    // })
  })
})
