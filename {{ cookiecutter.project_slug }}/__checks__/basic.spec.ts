import 'dotenv/config'
import { test, expect } from '@playwright/test'

test('Homepage loads and displays expected content', async ({ page }) => {
  const baseUrl = process.env.ENVIRONMENT_URL

  if (!baseUrl) {
    throw new Error('ENVIRONMENT_URL is not defined in .env')
  }

  await page.goto(baseUrl)

  // Example: check that a key element like the site header is visible
  const header = page.locator('h1') // Adjust to match your actual UI
  await expect(header).toBeVisible()
})
