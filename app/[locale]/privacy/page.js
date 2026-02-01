import { setRequestLocale } from 'next-intl/server';

export function generateMetadata() {
  return {
    title: 'Privacy Policy — Growie',
    description: 'Growie Privacy Policy. How we collect, use, and protect your personal data.',
  };
}

export default function PrivacyPage({ params: { locale } }) {
  setRequestLocale(locale);

  return (
    <article className="max-w-3xl mx-auto px-4 py-16 prose">
      <h1>Privacy Policy</h1>
      <p><strong>Last updated:</strong> January 29, 2025</p>

      <p>
        Growie (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the Growie mobile application
        and the website growie.pro (collectively, the &quot;Service&quot;). This Privacy Policy explains
        how we collect, use, disclose, and safeguard your information when you use our Service.
      </p>

      <h2>1. Information We Collect</h2>

      <h3>1.1 Information You Provide</h3>
      <ul>
        <li><strong>Account data:</strong> email address, username, and password when you create an account.</li>
        <li><strong>Profile data:</strong> optional profile photo and display name.</li>
        <li><strong>Grow diary data:</strong> plant logs, photos, notes, climate readings, watering and feeding schedules that you enter into the app.</li>
        <li><strong>Support requests:</strong> any information you provide when contacting us for help.</li>
      </ul>

      <h3>1.2 Information Collected Automatically</h3>
      <ul>
        <li><strong>Device information:</strong> device model, operating system version, unique device identifiers.</li>
        <li><strong>Usage data:</strong> features used, pages visited, session duration, crash logs.</li>
        <li><strong>IP address:</strong> collected for security and approximate geolocation (country level).</li>
      </ul>

      <h3>1.3 Information We Do Not Collect</h3>
      <ul>
        <li>We do not collect precise GPS location.</li>
        <li>We do not access your contacts, microphone, or files outside the app.</li>
        <li>We do not sell your personal data to third parties.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use the collected information to:</p>
      <ul>
        <li>Provide, maintain, and improve the Service.</li>
        <li>Personalize your experience and deliver relevant recommendations.</li>
        <li>Send important notifications (schedule reminders, climate alerts).</li>
        <li>Analyze usage patterns to improve app performance and features.</li>
        <li>Respond to support requests and communicate with you.</li>
        <li>Detect and prevent fraud, abuse, or security incidents.</li>
      </ul>

      <h2>3. Data Storage and Security</h2>
      <ul>
        <li>Your data is stored on secure servers with encryption at rest and in transit (TLS 1.2+).</li>
        <li>Grow diary data is stored locally on your device and synced to the cloud only if you enable sync.</li>
        <li>We implement industry-standard security measures including access controls, regular audits, and monitoring.</li>
        <li>Despite our efforts, no method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security.</li>
      </ul>

      <h2>4. Data Sharing</h2>
      <p>We do not sell, rent, or trade your personal data. We may share information only in these cases:</p>
      <ul>
        <li><strong>Service providers:</strong> trusted third parties that help us operate the Service (hosting, analytics, crash reporting) under strict data processing agreements.</li>
        <li><strong>Legal requirements:</strong> when required by law, regulation, or legal process.</li>
        <li><strong>Safety:</strong> to protect the rights, safety, or property of Growie, our users, or the public.</li>
        <li><strong>With your consent:</strong> when you explicitly agree to share data (e.g., community features).</li>
      </ul>

      <h2>5. Third-Party Services</h2>
      <p>The Service may use the following third-party services:</p>
      <ul>
        <li><strong>Analytics:</strong> to understand how users interact with the app (anonymized data).</li>
        <li><strong>Cloud storage:</strong> for data synchronization across devices.</li>
        <li><strong>Push notifications:</strong> to deliver reminders and alerts.</li>
      </ul>
      <p>Each third-party service has its own privacy policy governing the use of your information.</p>

      <h2>6. Your Rights</h2>
      <p>Depending on your location, you may have the following rights:</p>
      <ul>
        <li><strong>Access:</strong> request a copy of the personal data we hold about you.</li>
        <li><strong>Correction:</strong> request correction of inaccurate or incomplete data.</li>
        <li><strong>Deletion:</strong> request deletion of your personal data (&quot;right to be forgotten&quot;).</li>
        <li><strong>Export:</strong> request your data in a portable, machine-readable format.</li>
        <li><strong>Opt-out:</strong> unsubscribe from marketing communications at any time.</li>
        <li><strong>Withdraw consent:</strong> where processing is based on consent, you may withdraw it at any time.</li>
      </ul>
      <p>To exercise any of these rights, contact us at <strong>privacy@growie.pro</strong>.</p>

      <h2>7. Data Retention</h2>
      <ul>
        <li>Account data is retained for as long as your account is active.</li>
        <li>Upon account deletion, personal data is removed within 30 days, except where retention is required by law.</li>
        <li>Anonymized, aggregated data may be retained indefinitely for analytics purposes.</li>
      </ul>

      <h2>8. Children&apos;s Privacy</h2>
      <p>
        The Service is not directed to children under 16. We do not knowingly collect personal data
        from children under 16. If you believe we have collected data from a child, please contact
        us and we will promptly delete it.
      </p>

      <h2>9. International Data Transfers</h2>
      <p>
        Your data may be transferred to and processed in countries other than your country of residence.
        We ensure appropriate safeguards are in place, including standard contractual clauses where required.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of material changes
        by posting the updated policy on this page and updating the &quot;Last updated&quot; date.
        Continued use of the Service after changes constitutes acceptance of the updated policy.
      </p>

      <h2>11. Contact Us</h2>
      <p>If you have questions or concerns about this Privacy Policy, contact us at:</p>
      <ul>
        <li><strong>Email:</strong> privacy@growie.pro</li>
        <li><strong>Website:</strong> growie.pro</li>
      </ul>
    </article>
  );
}
