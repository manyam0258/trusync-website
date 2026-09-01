import { test, expect } from '@playwright/test';

test.describe('Contact Form Inquiry Routing', () => {
  test.beforeEach(async ({ page }) => {
    // Start from homepage
    await page.goto('/');
    expect(page).toHaveURL('http://localhost:3000/');
  });

  test('should route AI Automation inquiry to contact form with correct service selected', async ({ page }) => {
    // Navigate to AI Automation page
    await page.goto('/innovation/ai-automation');
    await expect(page).toHaveURL('http://localhost:3000/innovation/ai-automation');
    
    // Look for and click the "Get Started with AI Consulting" button
    const getStartedButton = page.locator('text=Get Started with AI Consulting');
    await expect(getStartedButton).toBeVisible();
    await getStartedButton.click();
    
    // Should navigate to contact form
    await expect(page).toHaveURL('http://localhost:3000/#contact');
    
    // Verify AI Consulting is selected in service dropdown
    const serviceSelect = page.locator('#service');
    await expect(serviceSelect).toHaveValue('AI Consulting');
  });

  test('should route DPDP Compliance inquiry to contact form with correct service selected', async ({ page }) => {
    // Navigate to DPDP Compliance page
    await page.goto('/innovation/dpdp-compliance');
    await expect(page).toHaveURL('http://localhost:3000/innovation/dpdp-compliance');
    
    // Look for and click the "Talk to Our DPDPA Technology Consultants" button
    const talkButton = page.locator('text=Talk to Our DPDPA Technology Consultants');
    await expect(talkButton).toBeVisible();
    await talkButton.click();
    
    // Should navigate to contact form
    await expect(page).toHaveURL('http://localhost:3000/#contact');
    
    // Verify Consulting is selected in service dropdown (since that's what maps to this)
    const serviceSelect = page.locator('#service');
    await expect(serviceSelect).toHaveValue('Consulting');
  });

  test('should route Explore Sentinel-DPDP inquiry to contact form with correct service selected', async ({ page }) => {
    // Navigate to DPDP Compliance page
    await page.goto('/innovation/dpdp-compliance');
    await expect(page).toHaveURL('http://localhost:3000/innovation/dpdp-compliance');
    
    // Look for and click the "Explore Sentinel-DPDP" button
    const exploreButton = page.locator('text=Explore Sentinel-DPDP');
    await expect(exploreButton).toBeVisible();
    await exploreButton.click();
    
    // Should navigate to contact form
    await expect(page).toHaveURL('http://localhost:3000/#contact');
    
    // Verify Sentinel-DPDP is selected in service dropdown
    const serviceSelect = page.locator('#service');
    await expect(serviceSelect).toHaveValue('Sentinel-DPDP');
  });

  test('should allow manual service selection and form submission', async ({ page }) => {
    // Navigate directly to contact form
    await page.goto('/#contact');
    await expect(page).toHaveURL('http://localhost:3000/#contact');
    
    // Fill out the form
    await page.fill('#name', 'Test User');
    await page.fill('#email', 'test@example.com');
    await page.fill('#phone', '+1234567890');
    await page.selectOption('#service', 'AI Automation');
    await page.fill('#message', 'This is a test inquiry to verify form functionality.');
    
    // Submit the form
    await page.click('button[type="submit"]:has-text("Send Enquiry")');
    
    // Wait for success message
    const successMessage = page.locator('text=Enquiry submitted and cryptographically sealed under DPDP Act!');
    await expect(successMessage).toBeVisible({ timeout: 10000 });
  });
});