import { describe, it } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import HomePage from '../HomePage'
import HomePageLayout from '../../../components/PageLayout/HomePageLayout'

describe('HomePage tests', () => {
  it('Redirecting to BuildPage', async () => {
    render(<HomePageLayout Component={HomePage} />, { wrapper: BrowserRouter })
    const user = userEvent.setup()

    const buildBtn = screen.getByText(/Build Resume/i)

    await user.click(buildBtn)
    await waitFor(() => {
      expect(window.location.pathname).toBe('/builder')
    })

    expect(buildBtn).toBeVisible()
  })
})
