import { setRequestLocale } from 'next-intl/server';

export function generateMetadata() {
  return {
    title: 'Terms of Service — Growie',
    description: 'Growie Terms of Service. Rules and conditions for using the Growie app and website.',
  };
}

export default function TermsPage({ params: { locale } }) {
  setRequestLocale(locale);

  return (
    <article className="max-w-3xl mx-auto px-4 py-16 prose">
      <h1>Terms of Service</h1>
      <p><strong>Last updated:</strong> January 29, 2025</p>

      <p>
        Please read these Terms of Service (&quot;Terms&quot;) carefully before using the Growie
        mobile application and the website growie.pro (collectively, the &quot;Service&quot;) operated
        by Growie (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).
      </p>
      <p>
        By accessing or using the Service, you agree to be bound by these Terms. If you do not agree,
        do not use the Service.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        You must be at least 16 years old to use the Service. By using the Service, you represent
        that you meet this age requirement. If you are under 18, you confirm that you have obtained
        parental or guardian consent.
      </p>

      <h2>2. Account Registration</h2>
      <ul>
        <li>You may need to create an account to access certain features.</li>
        <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
        <li>You agree to provide accurate and complete information during registration.</li>
        <li>You are responsible for all activity that occurs under your account.</li>
        <li>Notify us immediately at support@growie.pro if you suspect unauthorized access to your account.</li>
      </ul>

      <h2>3. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Service for any unlawful purpose or in violation of any applicable laws.</li>
        <li>Upload or transmit malicious code, viruses, or harmful content.</li>
        <li>Attempt to gain unauthorized access to the Service, other accounts, or related systems.</li>
        <li>Interfere with or disrupt the integrity or performance of the Service.</li>
        <li>Scrape, crawl, or use automated means to access the Service without our written permission.</li>
        <li>Impersonate another person or entity.</li>
        <li>Use the Service to harass, abuse, or harm others.</li>
      </ul>

      <h2>4. User Content</h2>
      <ul>
        <li>You retain ownership of all content you create in the Service (diary entries, photos, notes).</li>
        <li>By posting content in community features, you grant us a non-exclusive, worldwide, royalty-free
          license to display that content within the Service.</li>
        <li>You are solely responsible for your content and must not post anything that infringes
          third-party rights or violates applicable laws.</li>
        <li>We reserve the right to remove content that violates these Terms without prior notice.</li>
      </ul>

      <h2>5. Intellectual Property</h2>
      <ul>
        <li>The Service, including its design, code, graphics, logos, and text content, is owned by
          Growie and protected by intellectual property laws.</li>
        <li>You may not copy, modify, distribute, sell, or create derivative works based on the Service
          without our express written consent.</li>
        <li>The Growie name and logo are our trademarks. You may not use them without prior authorization.</li>
      </ul>

      <h2>6. Subscriptions and Payments</h2>
      <ul>
        <li>Some features may require a paid subscription.</li>
        <li>Subscription fees are billed in advance on a recurring basis (monthly or annually).</li>
        <li>You may cancel your subscription at any time through your app store account settings.</li>
        <li>Refunds are handled in accordance with the policies of the applicable app store (Apple App Store, Google Play).</li>
        <li>We reserve the right to change pricing with reasonable notice. Price changes will not apply
          to the current billing period.</li>
      </ul>

      <h2>7. Free Trial</h2>
      <p>
        We may offer a free trial period. At the end of the trial, your account will automatically
        convert to a paid subscription unless you cancel before the trial ends. You will be notified
        before the trial expires.
      </p>

      <h2>8. Service Availability</h2>
      <ul>
        <li>We strive to keep the Service available 24/7, but do not guarantee uninterrupted access.</li>
        <li>We may suspend or discontinue the Service (or any part of it) at any time for maintenance,
          updates, or other reasons.</li>
        <li>We are not liable for any downtime or service interruptions.</li>
      </ul>

      <h2>9. Disclaimer of Warranties</h2>
      <p>
        The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind,
        whether express or implied. We do not warrant that:
      </p>
      <ul>
        <li>The Service will meet your specific requirements.</li>
        <li>The Service will be error-free, secure, or uninterrupted.</li>
        <li>Results obtained from the Service (including AI-powered recommendations and diagnostics)
          will be accurate or reliable.</li>
      </ul>
      <p>
        Growie provides plant care recommendations for informational purposes only. We are not
        responsible for the outcome of your growing activities.
      </p>

      <h2>10. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Growie and its officers, directors, employees, and
        agents shall not be liable for any indirect, incidental, special, consequential, or punitive
        damages, including but not limited to loss of profits, data, or other intangible losses,
        arising from:
      </p>
      <ul>
        <li>Your use of or inability to use the Service.</li>
        <li>Any unauthorized access to or alteration of your data.</li>
        <li>Any third-party conduct on the Service.</li>
      </ul>

      <h2>11. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Growie and its affiliates from any claims, damages,
        losses, or expenses (including legal fees) arising from your use of the Service or violation
        of these Terms.
      </p>

      <h2>12. Termination</h2>
      <ul>
        <li>You may stop using the Service and delete your account at any time.</li>
        <li>We may suspend or terminate your access if you violate these Terms, without prior notice.</li>
        <li>Upon termination, your right to use the Service ceases immediately. Data deletion follows
          our Privacy Policy.</li>
      </ul>

      <h2>13. Governing Law</h2>
      <p>
        These Terms are governed by and construed in accordance with applicable laws. Any disputes
        shall be resolved through good-faith negotiation first, and if unsuccessful, through the
        competent courts of the applicable jurisdiction.
      </p>

      <h2>14. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. Material changes will be communicated through
        the app or by email. Continued use of the Service after changes constitutes acceptance of the
        updated Terms.
      </p>

      <h2>15. Contact Us</h2>
      <p>If you have questions about these Terms, contact us at:</p>
      <ul>
        <li><strong>Email:</strong> support@growie.pro</li>
        <li><strong>Website:</strong> growie.pro</li>
      </ul>
    </article>
  );
}
