# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: contact-form.spec.ts >> Contact Form Inquiry Routing >> should route AI Automation inquiry to contact form with correct service selected
- Location: tests/contact-form.spec.ts:10:7

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "http://localhost:3000/"
Received: "http://localhost:3000/innovation/ai-automation#contact"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    - waiting for "http://localhost:3000/innovation/ai-automation" navigation to finish...
    - navigated to "http://localhost:3000/innovation/ai-automation"
    5 × locator resolved to <html lang="en" class="scroll-smooth">…</html>
      - unexpected value "http://localhost:3000/innovation/ai-automation"
    5 × locator resolved to <html lang="en" class="scroll-smooth">…</html>
      - unexpected value "http://localhost:3000/innovation/ai-automation#contact"

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
  - heading "Generative AI & LLM Solutions" [level=1]
  - paragraph: Turn AI Possibilities into Real Business Results
  - link "Explore AI Solutions":
    - /url: "#services"
  - link "Explore Solutions":
    - /url: "#features"
  - text: TruSync
  - heading "Why Conventional Solutions Fall Short" [level=2]
  - paragraph: Generic software often creates more problems than it solves. We address specific industry challenges head-on.
  - heading "Manual Effort" [level=3]
  - paragraph: Teams spending excessive time on repetitive, manual tasks.
  - heading "Limited Insights" [level=3]
  - paragraph: Difficulty extracting actionable intelligence from business data.
  - heading "Slow Decision-Making" [level=3]
  - paragraph: Inability to quickly process information for timely decisions.
  - heading "The TruSync Advantage" [level=2]
  - paragraph: Purpose-built solutions designed for scalability, performance, and real-world results.
  - heading "Knowledge Automation" [level=3]
  - paragraph: AI-powered understanding of documents, emails and reports.
  - heading "Intelligent Assistants" [level=3]
  - paragraph: AI chatbots and virtual agents for employees and customers.
  - heading "Decision Support" [level=3]
  - paragraph: AI-enhanced analysis for faster, data-driven decisions.
  - heading "Document Processing" [level=3]
  - paragraph: Automated extraction and classification of business documents.
  - heading "Built on Robust Open Source Technologies" [level=2]
  - text: Python TensorFlow/PyTorch OpenAI API
  - link "View our technical expertise":
    - /url: /services/hire-dedicated-developer
  - heading "Ready to Transform Your Business?" [level=2]
  - paragraph: Don't let outdated software hold you back. Schedule a free discovery call with our ERP experts today.
  - link "Book Free Consultation":
    - /url: "#contact"
  - heading "Generative AI & LLM Solutions" [level=1]
  - paragraph: Turn AI Possibilities into Real Business Results
  - paragraph: Generative AI is transforming the way businesses work—from automating repetitive tasks and processing documents to creating intelligent assistants and accelerating decision-making. We help organizations move beyond AI experimentation and implement practical, secure and scalable Generative AI and Large Language Model (LLM) solutions that deliver measurable business value.
  - paragraph: Whether you are exploring your first AI use case or looking to scale an existing AI initiative, we work with you from strategy and use-case identification to development, integration and deployment.
  - heading "How We Help Your Business" [level=2]
  - img
  - heading "Automate Knowledge-Intensive Work" [level=3]
  - paragraph: Reduce manual effort by using AI to understand documents, emails, reports and business information and convert them into actionable insights.
  - img
  - heading "Build Intelligent Business Assistants" [level=3]
  - paragraph: Create AI-powered assistants that help employees and customers find information, answer questions and complete routine tasks faster.
  - img
  - heading "Unlock Enterprise Knowledge" [level=3]
  - paragraph: Connect AI with your organization's approved documents, policies, procedures and knowledge repositories to make information easier to access and use.
  - img
  - heading "Improve Decision-Making" [level=3]
  - paragraph: Use AI to summarize large volumes of information, identify patterns, generate insights and support faster business decisions.
  - img
  - heading "Transform Document Processing" [level=3]
  - paragraph: Automate the extraction, validation and classification of information from invoices, contracts, purchase orders, applications and other business documents.
  - img
  - heading "Accelerate Product & Application Development" [level=3]
  - paragraph: Leverage AI to accelerate software development, documentation, testing, knowledge management and product innovation.
  - img
  - heading "AI Strategy & Consulting" [level=3]
  - paragraph: Comprehensive AI strategy development, use-case identification and assessment for enterprise AI initiatives.
  - heading "Our Generative AI Services" [level=2]
  - paragraph: We offer a comprehensive suite of Generative AI and LLM services designed to address diverse business needs across industries.
  - text: •
  - strong: Generative AI Strategy & Consulting
  - text: •
  - strong: AI Use-Case Identification & Assessment
  - text: •
  - strong: Enterprise AI Assistants
  - text: •
  - strong: AI Chatbots & Conversational AI
  - text: •
  - strong: Retrieval-Augmented Generation (RAG)
  - text: •
  - strong: Intelligent Document Processing
  - text: •
  - strong: AI-powered Search & Knowledge Management
  - text: •
  - strong: AI Workflow Automation
  - text: •
  - strong: AI Integration with ERP, CRM and Business Applications
  - text: •
  - strong: AI Proof of Concept (PoC) Development
  - text: •
  - strong: AI Application Modernization
  - text: •
  - strong: AI Governance & Responsible AI Advisory
  - heading "Ready to Transform Your Business with AI?" [level=2]
  - paragraph: Whether you're starting your AI journey or looking to scale existing initiatives, our team of AI specialists can help you achieve measurable business results through practical, secure and scalable AI solutions.
  - link "Get Started with AI Consulting":
    - /url: "#contact"
  - link "View Our AI Development Services":
    - /url: /services/ai-development
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

```
Error: expect(page).toHaveURL(expected) failed

Expected: "http://localhost:3000/#contact"
Received: "http://localhost:3000/innovation/ai-automation#contact"

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    9 × locator resolved to <html lang="en" class="scroll-smooth">…</html>
      - unexpected value "http://localhost:3000/innovation/ai-automation#contact"
  - Test ended.

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
  - heading "Generative AI & LLM Solutions" [level=1]
  - paragraph: Turn AI Possibilities into Real Business Results
  - link "Explore AI Solutions":
    - /url: "#services"
  - link "Explore Solutions":
    - /url: "#features"
  - text: TruSync
  - heading "Why Conventional Solutions Fall Short" [level=2]
  - paragraph: Generic software often creates more problems than it solves. We address specific industry challenges head-on.
  - heading "Manual Effort" [level=3]
  - paragraph: Teams spending excessive time on repetitive, manual tasks.
  - heading "Limited Insights" [level=3]
  - paragraph: Difficulty extracting actionable intelligence from business data.
  - heading "Slow Decision-Making" [level=3]
  - paragraph: Inability to quickly process information for timely decisions.
  - heading "The TruSync Advantage" [level=2]
  - paragraph: Purpose-built solutions designed for scalability, performance, and real-world results.
  - heading "Knowledge Automation" [level=3]
  - paragraph: AI-powered understanding of documents, emails and reports.
  - heading "Intelligent Assistants" [level=3]
  - paragraph: AI chatbots and virtual agents for employees and customers.
  - heading "Decision Support" [level=3]
  - paragraph: AI-enhanced analysis for faster, data-driven decisions.
  - heading "Document Processing" [level=3]
  - paragraph: Automated extraction and classification of business documents.
  - heading "Built on Robust Open Source Technologies" [level=2]
  - text: Python TensorFlow/PyTorch OpenAI API
  - link "View our technical expertise":
    - /url: /services/hire-dedicated-developer
  - heading "Ready to Transform Your Business?" [level=2]
  - paragraph: Don't let outdated software hold you back. Schedule a free discovery call with our ERP experts today.
  - link "Book Free Consultation":
    - /url: "#contact"
  - heading "Generative AI & LLM Solutions" [level=1]
  - paragraph: Turn AI Possibilities into Real Business Results
  - paragraph: Generative AI is transforming the way businesses work—from automating repetitive tasks and processing documents to creating intelligent assistants and accelerating decision-making. We help organizations move beyond AI experimentation and implement practical, secure and scalable Generative AI and Large Language Model (LLM) solutions that deliver measurable business value.
  - paragraph: Whether you are exploring your first AI use case or looking to scale an existing AI initiative, we work with you from strategy and use-case identification to development, integration and deployment.
  - heading "How We Help Your Business" [level=2]
  - img
  - heading "Automate Knowledge-Intensive Work" [level=3]
  - paragraph: Reduce manual effort by using AI to understand documents, emails, reports and business information and convert them into actionable insights.
  - img
  - heading "Build Intelligent Business Assistants" [level=3]
  - paragraph: Create AI-powered assistants that help employees and customers find information, answer questions and complete routine tasks faster.
  - img
  - heading "Unlock Enterprise Knowledge" [level=3]
  - paragraph: Connect AI with your organization's approved documents, policies, procedures and knowledge repositories to make information easier to access and use.
  - img
  - heading "Improve Decision-Making" [level=3]
  - paragraph: Use AI to summarize large volumes of information, identify patterns, generate insights and support faster business decisions.
  - img
  - heading "Transform Document Processing" [level=3]
  - paragraph: Automate the extraction, validation and classification of information from invoices, contracts, purchase orders, applications and other business documents.
  - img
  - heading "Accelerate Product & Application Development" [level=3]
  - paragraph: Leverage AI to accelerate software development, documentation, testing, knowledge management and product innovation.
  - img
  - heading "AI Strategy & Consulting" [level=3]
  - paragraph: Comprehensive AI strategy development, use-case identification and assessment for enterprise AI initiatives.
  - heading "Our Generative AI Services" [level=2]
  - paragraph: We offer a comprehensive suite of Generative AI and LLM services designed to address diverse business needs across industries.
  - text: •
  - strong: Generative AI Strategy & Consulting
  - text: •
  - strong: AI Use-Case Identification & Assessment
  - text: •
  - strong: Enterprise AI Assistants
  - text: •
  - strong: AI Chatbots & Conversational AI
  - text: •
  - strong: Retrieval-Augmented Generation (RAG)
  - text: •
  - strong: Intelligent Document Processing
  - text: •
  - strong: AI-powered Search & Knowledge Management
  - text: •
  - strong: AI Workflow Automation
  - text: •
  - strong: AI Integration with ERP, CRM and Business Applications
  - text: •
  - strong: AI Proof of Concept (PoC) Development
  - text: •
  - strong: AI Application Modernization
  - text: •
  - strong: AI Governance & Responsible AI Advisory
  - heading "Ready to Transform Your Business with AI?" [level=2]
  - paragraph: Whether you're starting your AI journey or looking to scale existing initiatives, our team of AI specialists can help you achieve measurable business results through practical, secure and scalable AI solutions.
  - link "Get Started with AI Consulting":
    - /url: "#contact"
  - link "View Our AI Development Services":
    - /url: /services/ai-development
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
> 21 |     await expect(page).toHaveURL('http://localhost:3000/#contact');
     |                        ^ Error: expect(page).toHaveURL(expected) failed
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
  67 |     await expect(page).toHaveURL('http://localhost:3000/#contact');
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