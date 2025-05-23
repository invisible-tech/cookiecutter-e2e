import { test, expect } from '@playwright/test'

test.use({ storageState: './src/checks/auth.json' })

test('Homepage loads with login state', async ({ page }) => {
  await page.goto(process.env.ENVIRONMENT_URL!)
  const heading = page.locator('h1')
  await expect(heading).toBeVisible()
})
