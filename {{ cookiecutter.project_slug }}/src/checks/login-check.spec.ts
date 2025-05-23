import { test, chromium } from '@playwright/test'
import path from 'path'

test('Save login session', async () => {
  const baseUrl = process.env.ENVIRONMENT_URL
  const postLoginPath = process.env.POST_LOGIN_PATH || '/dashboard'
  const fullRedirectUrl = `${baseUrl}${postLoginPath}`

  if (!baseUrl) {
    throw new Error('ENVIRONMENT_URL is not defined in .env')
  }

  const browser = await chromium.launch({ headless: false })
  const context = await browser.newContext()
  const page = await context.newPage()

  await page.goto(`${baseUrl}/login`)
  console.log('Please complete login manually in the browser window...')

  await page.waitForURL(fullRedirectUrl, { timeout: 0 })

  const storagePath = path.resolve(__dirname, 'auth.json')
  await context.storageState({ path: storagePath })

  console.log(`✅ Auth session saved to: ${storagePath}`)
  await browser.close()
})
