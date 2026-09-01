# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: contact-form.spec.ts >> Contact Form Inquiry Routing >> should route Explore Sentinel-DPDP inquiry to contact form with correct service selected
- Location: tests/contact-form.spec.ts:46:7

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "http://localhost:3000/"
Received: "http://localhost:3000/innovation/dpdp-compliance#contact"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    - waiting for "http://localhost:3000/innovation/dpdp-compliance" navigation to finish...
    - navigated to "http://localhost:3000/innovation/dpdp-compliance"
    8 × locator resolved to <html lang="en" class="scroll-smooth">…</html>
      - unexpected value "http://localhost:3000/innovation/dpdp-compliance"
    5 × locator resolved to <html lang="en" class="scroll-smooth">…</html>
      - unexpected value "http://localhost:3000/innovation/dpdp-compliance#contact"

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
  - heading "Digital Personal Data Protection (DPDP) Act, 2023" [level=1]
  - paragraph: Simplifying DPDP Compliance Through Technology
  - link "Start Your DPDP Journey":
    - /url: "#assessment"
  - link "Explore Solutions":
    - /url: "#features"
  - text: TruSync
  - heading "Why Conventional Solutions Fall Short" [level=2]
  - paragraph: Generic software often creates more problems than it solves. We address specific industry challenges head-on.
  - heading "Legal Risks" [level=3]
  - paragraph: High penalties for non-compliance with the new DPDP Act.
  - heading "Data Breaches" [level=3]
  - paragraph: Vulnerable data infrastructure risking customer trust.
  - heading "Consent Management" [level=3]
  - paragraph: Complexities in managing user consent and data rights.
  - heading "The TruSync Advantage" [level=2]
  - paragraph: Purpose-built solutions designed for scalability, performance, and real-world results.
  - heading "Gap Analysis" [level=3]
  - paragraph: Comprehensive audit of current data practices against DPDP requirements.
  - heading "Policy Framework" [level=3]
  - paragraph: Drafting robust privacy policies and consent mechanisms.
  - heading "Data Mapping" [level=3]
  - paragraph: Visualizing data flow to ensure lawful processing.
  - heading "Compliance Dashboard" [level=3]
  - paragraph: Real-time monitoring of compliance status.
  - heading "Built on Robust Open Source Technologies" [level=2]
  - text: Privacy by Design Encryption Access Control
  - link "View our technical expertise":
    - /url: /services/hire-dedicated-developer
  - heading "Ready to Transform Your Business?" [level=2]
  - paragraph: Don't let outdated software hold you back. Schedule a free discovery call with our ERP experts today.
  - link "Book Free Consultation":
    - /url: "#contact"
  - heading "What is the DPDP Act?" [level=2]
  - paragraph:
    - text: The
    - strong: DPDP Act, 2023
    - text: is India's primary framework for regulating the processing of digital personal data.
  - paragraph: "It establishes requirements relating to:"
  - list:
    - listitem: Personal data processing
    - listitem: Consent and lawful processing
    - listitem: Data Principal rights
    - listitem: Data security
    - listitem: Breach management
    - listitem: Grievance redressal
    - listitem: Children's data
    - listitem: Significant Data Fiduciaries
    - listitem: Regulatory oversight
  - paragraph:
    - text: The
    - strong: Digital Personal Data Protection Rules, 2025
    - text: provide detailed operational requirements under the framework.
  - heading "Who Needs to Consider DPDP?" [level=2]
  - paragraph: DPDP requirements can apply to organisations across industries that process digital personal data.
  - heading "Manufacturing" [level=3]
  - paragraph: Customer, employee, dealer, supplier and enquiry data.
  - heading "Real Estate" [level=3]
  - paragraph: Buyer, tenant, lead, broker and customer information.
  - heading "IT & SaaS" [level=3]
  - paragraph: User, customer, support, application and marketing data.
  - heading "Hotels & Hospitality" [level=3]
  - paragraph: Guest, booking, contact, loyalty and marketing information.
  - heading "Healthcare" [level=3]
  - paragraph: Patient, appointment, employee and related personal data.
  - heading "Education" [level=3]
  - paragraph: Student, parent/guardian, admission and academic information.
  - heading "Banking & Financial Services" [level=3]
  - paragraph: Customer, KYC, employee and financial-service related data.
  - heading "Retail & E-Commerce" [level=3]
  - paragraph: Customer accounts, orders, delivery, support and marketing information.
  - paragraph:
    - strong: Every organisation should assess its own processing activities and applicable requirements.
  - heading "Key Areas of DPDP Compliance" [level=2]
  - heading "Data Discovery & Inventory" [level=3]
  - paragraph: Identify personal data, systems, applications, processing activities and data flows across the organisation.
  - heading "Purpose & Lawful Basis" [level=3]
  - paragraph: Map each processing activity to its purpose and applicable lawful basis.
  - heading "Privacy Notices" [level=3]
  - paragraph: Provide clear information about personal data collection, processing purposes and applicable rights.
  - heading "Consent Management" [level=3]
  - paragraph: Where consent is the applicable basis, manage consent, preferences, evidence and withdrawal throughout the lifecycle.
  - heading "Data Principal Rights" [level=3]
  - paragraph: Enable applicable requests such as access, correction, erasure, consent withdrawal and grievance redressal.
  - heading "Data Security" [level=3]
  - paragraph: Implement appropriate technical and organisational safeguards including access control, encryption, logging, monitoring and secure disposal.
  - heading "Breach Management" [level=3]
  - paragraph: Establish processes to detect, assess, respond to and document personal-data breaches.
  - heading "Retention & Erasure" [level=3]
  - paragraph: Define appropriate retention periods and implement controlled review, deletion and disposal processes.
  - heading "Processor & Vendor Governance" [level=3]
  - paragraph: Identify third parties processing personal data and manage their contracts, data access, security and compliance responsibilities.
  - heading "DPIA & Privacy Risk" [level=3]
  - paragraph: Assess privacy risks associated with applicable processing activities and implement appropriate controls.
  - heading "Children & Guardian Data" [level=3]
  - paragraph: Implement appropriate controls for processing children's personal data and applicable guardian-related requirements.
  - heading "Governance & Audit" [level=3]
  - paragraph: Maintain policies, responsibilities, assessments, audit trails, evidence, findings and remediation activities.
  - heading "DPDPA Technology Consulting" [level=2]
  - heading "Turning Privacy Requirements into Technology & Business Controls" [level=3]
  - paragraph:
    - text: We provide
    - strong: DPDPA Technology Consulting
    - text: to help organisations translate India's
    - strong: Digital Personal Data Protection Act (DPDP Act)
    - text: requirements into practical technology, processes and governance controls.
  - paragraph: "Our consulting approach covers the complete personal data lifecycle:"
  - paragraph: Collection → Consent → Processing → Storage → Sharing → Retention → Deletion
  - paragraph:
    - text: with a focus on improving
    - strong: privacy, security and regulatory readiness
    - text: .
  - heading "Our Key Consulting Areas" [level=3]
  - text: •
  - strong: DPDPA Readiness Assessment
  - text: Assess your current technology, processes and controls to identify compliance gaps and priorities. •
  - strong: Personal Data Discovery & Mapping
  - text: Discover, classify and map personal data across applications, databases, business processes and data flows. •
  - strong: Consent & Preference Management
  - text: Design and implement consent, preference and withdrawal workflows where applicable. •
  - strong: Data Principal Rights
  - text: Enable technology-driven workflows for applicable access, correction, erasure and other rights requests. •
  - strong: Privacy Notice & Consent Workflows
  - text: Integrate privacy notices and applicable consent mechanisms into websites, applications and business processes. •
  - strong: Retention & Deletion Automation
  - text: Define retention policies and automate applicable review, deletion and disposal processes. •
  - strong: Data Breach & Incident Management
  - text: Design workflows for incident detection, assessment, escalation, response, notification and evidence management. •
  - strong: Vendor & Third-Party Governance
  - text: Assess and manage third-party processors, data sharing, contractual controls and data flows. •
  - strong: Privacy-by-Design Assessment
  - text: Evaluate applications and new initiatives for privacy requirements before implementation or release. •
  - strong: Audit Trails & Compliance Reporting
  - text: Establish evidence, audit trails, compliance dashboards, assessments and management reporting. •
  - strong: Enterprise Application Integration
  - text: Integrate DPDP controls with ERP, CRM, HRMS, websites, mobile applications, APIs and other business systems. •
  - strong: Privacy Technology Roadmap
  - text: Develop a practical roadmap for implementing and continuously improving privacy technology and controls.
  - heading "Our DPDP Implementation Approach" [level=2]
  - paragraph:
    - text: We help organisations move from
    - strong: compliance requirements to an operational privacy framework
    - text: .
  - text: 01 —
  - strong: Assess
  - text: Understand your organisation, personal data, systems, processes and current compliance posture. 02 —
  - strong: Design
  - text: Define the appropriate privacy processes, technology controls, governance structure and implementation roadmap. 03 —
  - strong: Implement
  - text: Implement notices, consent, rights, retention, security, processor, incident and governance controls. 04 —
  - strong: Integrate
  - text: Connect privacy controls with your existing business applications and technology ecosystem. 05 —
  - strong: Monitor
  - text: Continuously track compliance activities, risks, requests, incidents, vendors and remediation. 06 —
  - strong: Demonstrate
  - text: Maintain evidence, audit trails, reports and compliance records to demonstrate your privacy posture.
  - heading "Sentinel-DPDP" [level=2]
  - heading "Your DPDP Compliance Control Center" [level=3]
  - paragraph:
    - strong: Sentinel-DPDP
    - text: "helps organisations operationalise their privacy programme through a unified platform covering:"
  - list:
    - listitem: Data Inventory & Processing
    - listitem: Purpose & Lawful Basis
    - listitem: Privacy Notices
    - listitem: Consent Management
    - listitem: Data Principal Rights
    - listitem: Grievance Management
    - listitem: Processor & Data Sharing Management
    - listitem: Retention & Erasure
    - listitem: Breach Management
    - listitem: DPIA & Privacy Risk
    - listitem: Security & Governance
    - listitem: Audit & Compliance Evidence
    - listitem: Compliance Monitoring & Reporting
  - paragraph: From Data Discovery to Demonstrable Compliance.
  - heading "DPDP Compliance Lifecycle" [level=2]
  - paragraph:
    - strong: Discover
    - text: Identify personal data, systems, applications and processors.
  - paragraph:
    - strong: ↓
    - strong: Assess
    - text: Understand purposes, lawful basis, risks and compliance gaps.
  - paragraph:
    - strong: ↓
    - strong: Implement
    - text: Deploy the required privacy, security and governance controls.
  - paragraph:
    - strong: ↓
    - strong: Integrate
    - text: Connect DPDP controls with your business applications.
  - paragraph:
    - strong: ↓
    - strong: Monitor
    - text: Track compliance, risks, incidents, rights and remediation.
  - paragraph:
    - strong: ↓
    - strong: Audit & Improve
    - text: Maintain evidence, assess controls and continuously improve.
  - heading "Why Choose Us?" [level=2]
  - heading "Technology + Compliance + Business Process" [level=3]
  - paragraph: DPDP compliance cannot be addressed through documentation alone.
  - paragraph: "Our approach combines:"
  - list:
    - listitem:
      - strong: Regulatory Understanding
      - text: •
    - listitem:
      - strong: Business Process
      - text: •
    - listitem:
      - strong: Technology
      - text: •
    - listitem:
      - strong: Security
      - text: •
    - listitem:
      - strong: Automation
      - text: •
    - listitem:
      - strong: Governance
      - text: •
    - listitem:
      - strong: Continuous Monitoring
      - text: •
  - paragraph:
    - text: This enables organisations to move beyond a static compliance programme and build an
    - strong: operational privacy framework integrated into their everyday business processes and technology landscape.
  - heading "Start Your DPDP Journey" [level=2]
  - paragraph: Not sure where your organisation stands?
  - paragraph: We can help you assess your current DPDP readiness, identify technology and process gaps, and develop a practical implementation roadmap.
  - link "Request a DPDP Assessment":
    - /url: "#assessment"
  - link "Talk to Our DPDPA Technology Consultants":
    - /url: "#contact"
  - link "Explore Sentinel-DPDP":
    - /url: "#contact"
  - paragraph:
    - strong: Disclaimer
    - text: This content is provided for general informational purposes and does not constitute legal advice. DPDP applicability and obligations may vary depending on the organisation, processing activities, sector, exemptions and applicable legal requirements.
  - paragraph:
    - strong: "Last Reviewed: August 2026"
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
Received: "http://localhost:3000/innovation/dpdp-compliance#contact"

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    8 × locator resolved to <html lang="en" class="scroll-smooth">…</html>
      - unexpected value "http://localhost:3000/innovation/dpdp-compliance#contact"
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
  - heading "Digital Personal Data Protection (DPDP) Act, 2023" [level=1]
  - paragraph: Simplifying DPDP Compliance Through Technology
  - link "Start Your DPDP Journey":
    - /url: "#assessment"
  - link "Explore Solutions":
    - /url: "#features"
  - text: TruSync
  - heading "Why Conventional Solutions Fall Short" [level=2]
  - paragraph: Generic software often creates more problems than it solves. We address specific industry challenges head-on.
  - heading "Legal Risks" [level=3]
  - paragraph: High penalties for non-compliance with the new DPDP Act.
  - heading "Data Breaches" [level=3]
  - paragraph: Vulnerable data infrastructure risking customer trust.
  - heading "Consent Management" [level=3]
  - paragraph: Complexities in managing user consent and data rights.
  - heading "The TruSync Advantage" [level=2]
  - paragraph: Purpose-built solutions designed for scalability, performance, and real-world results.
  - heading "Gap Analysis" [level=3]
  - paragraph: Comprehensive audit of current data practices against DPDP requirements.
  - heading "Policy Framework" [level=3]
  - paragraph: Drafting robust privacy policies and consent mechanisms.
  - heading "Data Mapping" [level=3]
  - paragraph: Visualizing data flow to ensure lawful processing.
  - heading "Compliance Dashboard" [level=3]
  - paragraph: Real-time monitoring of compliance status.
  - heading "Built on Robust Open Source Technologies" [level=2]
  - text: Privacy by Design Encryption Access Control
  - link "View our technical expertise":
    - /url: /services/hire-dedicated-developer
  - heading "Ready to Transform Your Business?" [level=2]
  - paragraph: Don't let outdated software hold you back. Schedule a free discovery call with our ERP experts today.
  - link "Book Free Consultation":
    - /url: "#contact"
  - heading "What is the DPDP Act?" [level=2]
  - paragraph:
    - text: The
    - strong: DPDP Act, 2023
    - text: is India's primary framework for regulating the processing of digital personal data.
  - paragraph: "It establishes requirements relating to:"
  - list:
    - listitem: Personal data processing
    - listitem: Consent and lawful processing
    - listitem: Data Principal rights
    - listitem: Data security
    - listitem: Breach management
    - listitem: Grievance redressal
    - listitem: Children's data
    - listitem: Significant Data Fiduciaries
    - listitem: Regulatory oversight
  - paragraph:
    - text: The
    - strong: Digital Personal Data Protection Rules, 2025
    - text: provide detailed operational requirements under the framework.
  - heading "Who Needs to Consider DPDP?" [level=2]
  - paragraph: DPDP requirements can apply to organisations across industries that process digital personal data.
  - heading "Manufacturing" [level=3]
  - paragraph: Customer, employee, dealer, supplier and enquiry data.
  - heading "Real Estate" [level=3]
  - paragraph: Buyer, tenant, lead, broker and customer information.
  - heading "IT & SaaS" [level=3]
  - paragraph: User, customer, support, application and marketing data.
  - heading "Hotels & Hospitality" [level=3]
  - paragraph: Guest, booking, contact, loyalty and marketing information.
  - heading "Healthcare" [level=3]
  - paragraph: Patient, appointment, employee and related personal data.
  - heading "Education" [level=3]
  - paragraph: Student, parent/guardian, admission and academic information.
  - heading "Banking & Financial Services" [level=3]
  - paragraph: Customer, KYC, employee and financial-service related data.
  - heading "Retail & E-Commerce" [level=3]
  - paragraph: Customer accounts, orders, delivery, support and marketing information.
  - paragraph:
    - strong: Every organisation should assess its own processing activities and applicable requirements.
  - heading "Key Areas of DPDP Compliance" [level=2]
  - heading "Data Discovery & Inventory" [level=3]
  - paragraph: Identify personal data, systems, applications, processing activities and data flows across the organisation.
  - heading "Purpose & Lawful Basis" [level=3]
  - paragraph: Map each processing activity to its purpose and applicable lawful basis.
  - heading "Privacy Notices" [level=3]
  - paragraph: Provide clear information about personal data collection, processing purposes and applicable rights.
  - heading "Consent Management" [level=3]
  - paragraph: Where consent is the applicable basis, manage consent, preferences, evidence and withdrawal throughout the lifecycle.
  - heading "Data Principal Rights" [level=3]
  - paragraph: Enable applicable requests such as access, correction, erasure, consent withdrawal and grievance redressal.
  - heading "Data Security" [level=3]
  - paragraph: Implement appropriate technical and organisational safeguards including access control, encryption, logging, monitoring and secure disposal.
  - heading "Breach Management" [level=3]
  - paragraph: Establish processes to detect, assess, respond to and document personal-data breaches.
  - heading "Retention & Erasure" [level=3]
  - paragraph: Define appropriate retention periods and implement controlled review, deletion and disposal processes.
  - heading "Processor & Vendor Governance" [level=3]
  - paragraph: Identify third parties processing personal data and manage their contracts, data access, security and compliance responsibilities.
  - heading "DPIA & Privacy Risk" [level=3]
  - paragraph: Assess privacy risks associated with applicable processing activities and implement appropriate controls.
  - heading "Children & Guardian Data" [level=3]
  - paragraph: Implement appropriate controls for processing children's personal data and applicable guardian-related requirements.
  - heading "Governance & Audit" [level=3]
  - paragraph: Maintain policies, responsibilities, assessments, audit trails, evidence, findings and remediation activities.
  - heading "DPDPA Technology Consulting" [level=2]
  - heading "Turning Privacy Requirements into Technology & Business Controls" [level=3]
  - paragraph:
    - text: We provide
    - strong: DPDPA Technology Consulting
    - text: to help organisations translate India's
    - strong: Digital Personal Data Protection Act (DPDP Act)
    - text: requirements into practical technology, processes and governance controls.
  - paragraph: "Our consulting approach covers the complete personal data lifecycle:"
  - paragraph: Collection → Consent → Processing → Storage → Sharing → Retention → Deletion
  - paragraph:
    - text: with a focus on improving
    - strong: privacy, security and regulatory readiness
    - text: .
  - heading "Our Key Consulting Areas" [level=3]
  - text: •
  - strong: DPDPA Readiness Assessment
  - text: Assess your current technology, processes and controls to identify compliance gaps and priorities. •
  - strong: Personal Data Discovery & Mapping
  - text: Discover, classify and map personal data across applications, databases, business processes and data flows. •
  - strong: Consent & Preference Management
  - text: Design and implement consent, preference and withdrawal workflows where applicable. •
  - strong: Data Principal Rights
  - text: Enable technology-driven workflows for applicable access, correction, erasure and other rights requests. •
  - strong: Privacy Notice & Consent Workflows
  - text: Integrate privacy notices and applicable consent mechanisms into websites, applications and business processes. •
  - strong: Retention & Deletion Automation
  - text: Define retention policies and automate applicable review, deletion and disposal processes. •
  - strong: Data Breach & Incident Management
  - text: Design workflows for incident detection, assessment, escalation, response, notification and evidence management. •
  - strong: Vendor & Third-Party Governance
  - text: Assess and manage third-party processors, data sharing, contractual controls and data flows. •
  - strong: Privacy-by-Design Assessment
  - text: Evaluate applications and new initiatives for privacy requirements before implementation or release. •
  - strong: Audit Trails & Compliance Reporting
  - text: Establish evidence, audit trails, compliance dashboards, assessments and management reporting. •
  - strong: Enterprise Application Integration
  - text: Integrate DPDP controls with ERP, CRM, HRMS, websites, mobile applications, APIs and other business systems. •
  - strong: Privacy Technology Roadmap
  - text: Develop a practical roadmap for implementing and continuously improving privacy technology and controls.
  - heading "Our DPDP Implementation Approach" [level=2]
  - paragraph:
    - text: We help organisations move from
    - strong: compliance requirements to an operational privacy framework
    - text: .
  - text: 01 —
  - strong: Assess
  - text: Understand your organisation, personal data, systems, processes and current compliance posture. 02 —
  - strong: Design
  - text: Define the appropriate privacy processes, technology controls, governance structure and implementation roadmap. 03 —
  - strong: Implement
  - text: Implement notices, consent, rights, retention, security, processor, incident and governance controls. 04 —
  - strong: Integrate
  - text: Connect privacy controls with your existing business applications and technology ecosystem. 05 —
  - strong: Monitor
  - text: Continuously track compliance activities, risks, requests, incidents, vendors and remediation. 06 —
  - strong: Demonstrate
  - text: Maintain evidence, audit trails, reports and compliance records to demonstrate your privacy posture.
  - heading "Sentinel-DPDP" [level=2]
  - heading "Your DPDP Compliance Control Center" [level=3]
  - paragraph:
    - strong: Sentinel-DPDP
    - text: "helps organisations operationalise their privacy programme through a unified platform covering:"
  - list:
    - listitem: Data Inventory & Processing
    - listitem: Purpose & Lawful Basis
    - listitem: Privacy Notices
    - listitem: Consent Management
    - listitem: Data Principal Rights
    - listitem: Grievance Management
    - listitem: Processor & Data Sharing Management
    - listitem: Retention & Erasure
    - listitem: Breach Management
    - listitem: DPIA & Privacy Risk
    - listitem: Security & Governance
    - listitem: Audit & Compliance Evidence
    - listitem: Compliance Monitoring & Reporting
  - paragraph: From Data Discovery to Demonstrable Compliance.
  - heading "DPDP Compliance Lifecycle" [level=2]
  - paragraph:
    - strong: Discover
    - text: Identify personal data, systems, applications and processors.
  - paragraph:
    - strong: ↓
    - strong: Assess
    - text: Understand purposes, lawful basis, risks and compliance gaps.
  - paragraph:
    - strong: ↓
    - strong: Implement
    - text: Deploy the required privacy, security and governance controls.
  - paragraph:
    - strong: ↓
    - strong: Integrate
    - text: Connect DPDP controls with your business applications.
  - paragraph:
    - strong: ↓
    - strong: Monitor
    - text: Track compliance, risks, incidents, rights and remediation.
  - paragraph:
    - strong: ↓
    - strong: Audit & Improve
    - text: Maintain evidence, assess controls and continuously improve.
  - heading "Why Choose Us?" [level=2]
  - heading "Technology + Compliance + Business Process" [level=3]
  - paragraph: DPDP compliance cannot be addressed through documentation alone.
  - paragraph: "Our approach combines:"
  - list:
    - listitem:
      - strong: Regulatory Understanding
      - text: •
    - listitem:
      - strong: Business Process
      - text: •
    - listitem:
      - strong: Technology
      - text: •
    - listitem:
      - strong: Security
      - text: •
    - listitem:
      - strong: Automation
      - text: •
    - listitem:
      - strong: Governance
      - text: •
    - listitem:
      - strong: Continuous Monitoring
      - text: •
  - paragraph:
    - text: This enables organisations to move beyond a static compliance programme and build an
    - strong: operational privacy framework integrated into their everyday business processes and technology landscape.
  - heading "Start Your DPDP Journey" [level=2]
  - paragraph: Not sure where your organisation stands?
  - paragraph: We can help you assess your current DPDP readiness, identify technology and process gaps, and develop a practical implementation roadmap.
  - link "Request a DPDP Assessment":
    - /url: "#assessment"
  - link "Talk to Our DPDPA Technology Consultants":
    - /url: "#contact"
  - link "Explore Sentinel-DPDP":
    - /url: "#contact"
  - paragraph:
    - strong: Disclaimer
    - text: This content is provided for general informational purposes and does not constitute legal advice. DPDP applicability and obligations may vary depending on the organisation, processing activities, sector, exemptions and applicable legal requirements.
  - paragraph:
    - strong: "Last Reviewed: August 2026"
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
> 57 |     await expect(page).toHaveURL('http://localhost:3000/#contact');
     |                        ^ Error: expect(page).toHaveURL(expected) failed
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