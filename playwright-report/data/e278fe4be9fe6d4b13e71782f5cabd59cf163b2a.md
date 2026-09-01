# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: contact-form.spec.ts >> Contact Form Inquiry Routing >> should allow manual service selection and form submission
- Location: tests/contact-form.spec.ts:64:7

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "http://localhost:3000/#contact"
Received: "http://localhost:3000/"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × locator resolved to <html lang="en" class="scroll-smooth">…</html>
       - unexpected value "http://localhost:3000/"

```

```yaml
- banner:
  - navigation:
    - link "TruSync Logo":
      - /url: /
      - img "TruSync Logo"
    - link "Home":
      - /url: /
    - link "About":
      - /url: /#about
    - button "Solutions"
    - button "Innovation"
    - link "Services":
      - /url: /#services
    - link "Industries":
      - /url: /#industries
    - link "Contact":
      - /url: /#contact
    - link "Get in Touch":
      - /url: "#contact"
- main:
  - text: ✨ Your trusted ERPNext partner in Hyderabad
  - heading "The Leading ERPNext & Frappe Company in Hyderabad! Transform Your Business" [level=1]
  - paragraph: TruSync is an ERPNext consulting firm and Frappe partner in Hyderabad, Telangana. We specialize in custom ERP implementation, module customization, integration, and AI workflow automation to optimize your business processes.
  - link "Book A Free Demo":
    - /url: "#contact"
  - link "View Case Studies":
    - /url: "#services"
  - text: 64+ ERPNext Experts 10+ Industries 200+ Projects Delivered 98% Client Satisfaction 64+ ERPNext Experts 10+ Industries 200+ Projects 5+ Years Experience About Us
  - heading "An ERPNext consulting firm with expertise in enterprise resource planning software." [level=2]
  - paragraph: Optimize your business processes, satisfy your customers, and ultimately boost your revenues by leveraging the best-in-class platform, such as ERPNext, and a trusted implementation partner.
  - paragraph: ERPNext is the feature-rich, all-in-one enterprise resource planning (ERP) solution that empowers businesses to streamline and optimize their operations.
  - text: Streamlined Management Better Customer Satisfaction Higher Revenues Certified Frappe Partners
  - heading "Certified Partner" [level=3]
  - paragraph: Official Frappe & ERPNext Partner
  - text: Our Services
  - heading "Our Services" [level=2]
  - paragraph: Comprehensive solutions to drive your business forward with technology and innovation.
  - link "Consulting Expert ERPNext consulting services to optimize your business processes.":
    - /url: /services/consulting
    - heading "Consulting" [level=3]
    - paragraph: Expert ERPNext consulting services to optimize your business processes.
  - link "ERPnext Implementation Complete ERPNext implementation tailored to your business requirements.":
    - /url: /services/erpnext-implementation
    - heading "ERPnext Implementation" [level=3]
    - paragraph: Complete ERPNext implementation tailored to your business requirements.
  - link "Development Custom ERPNext development and module creation.":
    - /url: /services/development
    - heading "Development" [level=3]
    - paragraph: Custom ERPNext development and module creation.
  - link "Migrations Seamless data migration from legacy systems to ERPNext.":
    - /url: /services/migrations
    - heading "Migrations" [level=3]
    - paragraph: Seamless data migration from legacy systems to ERPNext.
  - link "Mobile App development Custom mobile applications integrated with ERPNext.":
    - /url: /services/mobile-app-development
    - heading "Mobile App development" [level=3]
    - paragraph: Custom mobile applications integrated with ERPNext.
  - link "Training and Support Comprehensive training and ongoing support for ERPNext users.":
    - /url: /services/training-support
    - heading "Training and Support" [level=3]
    - paragraph: Comprehensive training and ongoing support for ERPNext users.
  - link "Website Build and manage your website directly within ERPNext.":
    - /url: /services/website-module
    - heading "Website" [level=3]
    - paragraph: Build and manage your website directly within ERPNext.
  - text: Industries
  - heading "Industries We Serve" [level=2]
  - paragraph: Tailored ERP + AI solutions for your specific business needs across various sectors.
  - link "Manufacturing":
    - /url: /industries/manufacturing
    - heading "Manufacturing" [level=3]
  - link "Healthcare":
    - /url: /industries/healthcare
    - heading "Healthcare" [level=3]
  - link "Retail & Distribution":
    - /url: /industries/retail-distribution
    - heading "Retail & Distribution" [level=3]
  - link "Construction":
    - /url: /industries/construction
    - heading "Construction" [level=3]
  - link "Real Estate":
    - /url: /industries/real-estate
    - heading "Real Estate" [level=3]
  - link "Agriculture":
    - /url: /industries/agriculture
    - heading "Agriculture" [level=3]
  - link "Education":
    - /url: /industries/education
    - heading "Education" [level=3]
  - link "Financial Services":
    - /url: /industries/financial-services
    - heading "Financial Services" [level=3]
  - text: Why Choose Us
  - heading "Why Choose Us As ERPNext Partner?" [level=2]
  - paragraph: We combine the power of open-source ERP with advanced AI automation to deliver solutions that are not just robust, but intelligent and tailored.
  - heading "Industry-rich expertise" [level=3]
  - paragraph: Extensive experience across various industries to meet unique requirements.
  - heading "Cost savings" [level=3]
  - paragraph: Cost-effective rates without compromising quality.
  - heading "Best development practices" [level=3]
  - paragraph: Latest methodologies for robust, adaptable, and future-proof solutions.
  - heading "Timely delivery" [level=3]
  - paragraph: Efficient project management and clear communication for on-time completion.
  - heading "Dedicated project manager" [level=3]
  - paragraph: Personalized attention, streamlined communication, and efficient coordination.
  - heading "Post-project support" [level=3]
  - paragraph: Comprehensive assistance after project completion for smooth operations.
  - text: Contact Us
  - heading "Get In Touch" [level=2]
  - paragraph: Ready to transform your business? Let's discuss how we can help you.
  - heading "Let's Connect" [level=3]
  - paragraph: Fill out the form and our team will get back to you within 24 hours.
  - text: Phone
  - link "+91 81434 83438":
    - /url: tel:+918****3438
  - text: Email
  - link "surendhranath@trusync.in":
    - /url: mailto:surendhranath@trusync.in
  - text: Address
  - paragraph: H.No. 30-265/25/56A/S-2, Sai Plaza, Neredmet, Hyderabad, Telangana 500056, India
  - text: Name *
  - textbox "Name *":
    - /placeholder: John Doe
  - text: Email *
  - textbox "Email *":
    - /placeholder: john@example.com
  - text: Phone
  - textbox "Phone":
    - /placeholder: +1 (555) 000-0000
  - text: Service Interest
  - combobox "Service Interest":
    - option "Select a service" [selected]
    - option "AI Automation"
    - option "AI Consulting"
    - option "AI Development"
    - option "Accounting Module"
    - option "Asset Management Module"
    - option "Blockchain Development"
    - option "Both ERP & AI"
    - option "Business Process Automation"
    - option "CRM Module"
    - option "Cloud Migration"
    - option "Consulting"
    - option "Cybersecurity Services"
    - option "DPDP Assessment"
    - option "DPDP Compliance"
    - option "Data Analytics"
    - option "Data Migration Services"
    - option "Development"
    - option "ERP Customization"
    - option "ERP Implementation"
    - option "ERPNext Implementation"
    - option "Frappe Development"
    - option "Frappe Framework"
    - option "HR Payroll Module"
    - option "Helpdesk Module"
    - option "IoT Solutions"
    - option "Mobile App Development"
    - option "Open Source Integrations"
    - option "Order Management Module"
    - option "Sentinel-DPDP"
    - option "Training & Support"
    - option "Website Development"
  - text: Message *
  - textbox "Message *":
    - /placeholder: Tell us about your project...
  - text: 🛡️ Website Contact & Marketing Privacy Notice (v1.0)
  - combobox:
    - option "Hindi"
    - option "Telugu"
    - option "Tamil"
    - option "Kannada"
    - option "Malayalam"
    - option "Bengali"
    - option "Marathi"
    - option "Gujarati"
    - option "Punjabi"
    - option "Odia"
    - option "Assamese"
    - option "Urdu"
    - option "Sanskrit"
    - option "Manipuri (Meitei)"
    - option "Bodo"
    - option "Dogri"
    - option "Kashmiri"
    - option "Konkani"
    - option "Maithili"
    - option "Nepali"
    - option "Santali"
    - option "Sindhi"
    - option "English" [selected]
  - strong: "Specified Purpose (§4(1)(b)):"
  - text: Process submitted contact details solely to respond to the enquiry and provide requested service quotation.
  - checkbox "I agree to receive occasional marketing updates, newsletters, and product recommendations (Optional — Section 6 DPDP Act)."
  - text: I agree to receive occasional marketing updates, newsletters, and product recommendations (Optional — Section 6 DPDP Act).
  - button "Send Enquiry"
- contentinfo:
  - link "TruSync Logo":
    - /url: /
    - img "TruSync Logo"
  - paragraph: Transforming Businesses with Smart ERP & AI Automation. Your trusted ERPNext partner.
  - heading "Services" [level=3]
  - list:
    - listitem:
      - link "ERPNext Modules":
        - /url: "#services"
    - listitem:
      - link "Product Engineering":
        - /url: "#"
    - listitem:
      - link "Hire Team":
        - /url: "#"
    - listitem:
      - link "Case Studies":
        - /url: "#services"
  - heading "Company" [level=3]
  - list:
    - listitem:
      - link "About Us":
        - /url: "#about"
    - listitem:
      - link "Industries":
        - /url: "#industries"
    - listitem:
      - link "Contact":
        - /url: "#contact"
    - listitem:
      - link "Privacy Policy":
        - /url: "#"
  - heading "Contact" [level=3]
  - list:
    - listitem: H.No. 30-265/25/56A/S-2, Sai Plaza, Neredmet, Hyderabad, Telangana 500056, India
    - listitem:
      - link "surendhranath@trusync.in":
        - /url: mailto:surendhranath@trusync.in
    - listitem:
      - link "+91 81434 83438":
        - /url: tel:+918143483438
  - paragraph: © 2025 TRUSYNC TECHNOLOGIES LLP. All rights reserved.
  - link:
    - /url: "#"
  - link:
    - /url: "#"
  - link:
    - /url: "#"
  - link:
    - /url: "#"
- alert
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Contact Form Inquiry Routing', () => {
  4  |   test.beforeEach(async ({ page }) => {
  5  |     // Start from homepage
  6  |     await page.goto('/');
  7  |     expect(page).toHaveURL('http://localhost:3000/');
  8  |   });
  9  | 
  10 |   test('should route AI Automation inquiry to contact form with correct service selected', async ({ page }) => {
  11 |     // Navigate to AI Automation page
  12 |     await page.goto('/innovation/ai-automation');
  13 |     await expect(page).toHaveURL('http://localhost:3000/innovation/ai-automation');
  14 |     
  15 |     // Look for and click the "Get Started with AI Consulting" button
  16 |     const getStartedButton = page.locator('text=Get Started with AI Consulting');
  17 |     await expect(getStartedButton).toBeVisible();
  18 |     await getStartedButton.click();
  19 |     
  20 |     // Should navigate to contact form
  21 |     await expect(page).toHaveURL('http://localhost:3000/#contact');
  22 |     
  23 |     // Verify AI Consulting is selected in service dropdown
  24 |     const serviceSelect = page.locator('#service');
  25 |     await expect(serviceSelect).toHaveValue('AI Consulting');
  26 |   });
  27 | 
  28 |   test('should route DPDP Compliance inquiry to contact form with correct service selected', async ({ page }) => {
  29 |     // Navigate to DPDP Compliance page
  30 |     await page.goto('/innovation/dpdp-compliance');
  31 |     await expect(page).toHaveURL('http://localhost:3000/innovation/dpdp-compliance');
  32 |     
  33 |     // Look for and click the "Request a DPDP Assessment" button
  34 |     const requestButton = page.locator('text=Request a DPDP Assessment');
  35 |     await expect(requestButton).toBeVisible();
  36 |     await requestButton.click();
  37 |     
  38 |     // Should navigate to contact form
  39 |     await expect(page).toHaveURL('http://localhost:3000/#contact');
  40 |     
  41 |     // Verify DPDP Assessment is selected in service dropdown
  42 |     const serviceSelect = page.locator('#service');
  43 |     await expect(serviceSelect).toHaveValue('DPDP Assessment');
  44 |   });
  45 | 
  46 |   test('should route Explore Sentinel-DPDP inquiry to contact form with correct service selected', async ({ page }) => {
  47 |     // Navigate to DPDP Compliance page
  48 |     await page.goto('/innovation/dpdp-compliance');
  49 |     await expect(page).toHaveURL('http://localhost:3000/innovation/dpdp-compliance');
  50 |     
  51 |     // Look for and click the "Explore Sentinel-DPDP" button
  52 |     const exploreButton = page.locator('text=Explore Sentinel-DPDP');
  53 |     await expect(exploreButton).toBeVisible();
  54 |     await exploreButton.click();
  55 |     
  56 |     // Should navigate to contact form
  57 |     await expect(page).toHaveURL('http://localhost:3000/#contact');
  58 |     
  59 |     // Verify Sentinel-DPDP is selected in service dropdown
  60 |     const serviceSelect = page.locator('#service');
  61 |     await expect(serviceSelect).toHaveValue('Sentinel-DPDP');
  62 |   });
  63 | 
  64 |   test('should allow manual service selection and form submission', async ({ page }) => {
  65 |     // Navigate directly to contact form
  66 |     await page.goto('/#contact');
> 67 |     await expect(page).toHaveURL('http://localhost:3000/#contact');
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  68 |     
  69 |     // Fill out the form
  70 |     await page.fill('#name', 'Test User');
  71 |     await page.fill('#email', 'test@example.com');
  72 |     await page.fill('#phone', '+1234567890');
  73 |     await page.selectOption('#service', 'AI Automation');
  74 |     await page.fill('#message', 'This is a test inquiry to verify form functionality.');
  75 |     
  76 |     // Submit the form
  77 |     await page.click('button[type="submit"]:has-text("Send Enquiry")');
  78 |     
  79 |     // Wait for success message
  80 |     const successMessage = page.locator('text=Enquiry submitted and cryptographically sealed under DPDP Act!');
  81 |     await expect(successMessage).toBeVisible({ timeout: 10000 });
  82 |   });
  83 | });
```