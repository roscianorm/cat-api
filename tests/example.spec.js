// @ts-check
import { test, expect } from '@playwright/test';

const LOCALHOST_URL = 'http://localhost:5173/';
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat';

test('app shows random fact and image', async ({ page }) => {
	await page.goto(LOCALHOST_URL);

	const text = await page.getByRole('paragraph');
	// For some reason, the test fails if I use the .getByRole() with the 'img' tag
	const image = await page.locator('#catImg');

	const textContent = await text.textContent();
	const imageSrc = await image.getAttribute('src');

	await expect(textContent?.length).toBeGreaterThan(0);
	await expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy();
});

// Use the following commadn on the terminal to run the test `npx playwright test`
