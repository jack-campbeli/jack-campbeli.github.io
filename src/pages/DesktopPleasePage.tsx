import { Link } from 'react-router-dom'
import styles from './AppsPage.module.css'

export default function DesktopPleasePage() {
  return (
    <div className="page-shell">
      <section className={`${styles.card} section-card`}>
        <Link to="/apps">← All apps</Link>
        <p className="eyebrow">Safari extension · Free · Coming soon</p>
        <h1 className="page-title">Desktop Please</h1>
        <p className="page-intro">Read Reddit in Safari with automatic desktop browser requests.</p>
        <p>Enable the extension once and allow Reddit access. Desktop Please remembers your preference and sends a desktop browser identity for reddit.com and redd.it pages.</p>
        <p>No account, subscriptions, ads, or analytics. Requires iOS or iPadOS 16.4 or later.</p>
        <a href="/apps/desktop-please/privacy.html">Privacy policy</a>
      </section>
      <section className={`${styles.card} section-card`}>
        <h2 className="section-heading">Set up once</h2>
        <ol>
          <li>After installing the app, open Settings → Apps → Safari → Extensions → Desktop Please. On older iOS versions, Safari appears directly in Settings.</li>
          <li>Enable Desktop Please and allow access to reddit.com and redd.it. If Safari asks while browsing, choose Always Allow.</li>
          <li>Open a Reddit link in Safari. Desktop requests start enabled. Use the Desktop Please panel in Safari to turn them off or back on.</li>
        </ol>
        <p>Reload pages that were already open when you enabled the extension or changed its setting.</p>
      </section>
      <section className={`${styles.card} section-card`}>
        <h2 className="section-heading">Questions and troubleshooting</h2>
        <h3>Why does Safari still offer “Request Desktop Website”?</h3>
        <p>Desktop Please changes the browser identification sent to Reddit. It does not toggle Safari’s own desktop setting, so that menu option can remain available.</p>
        <h3>Why is an app prompt still appearing?</h3>
        <p>Confirm that the extension is enabled, Reddit access is allowed, and the switch in the extension panel is on. Then try a fresh tab. Reddit controls its layout and prompts, so a desktop layout or removal of every prompt is not guaranteed.</p>
        <h3>What if the link opens the Reddit app?</h3>
        <p>The extension only runs in Safari. Paste the link into Safari’s address bar to open it there.</p>
        <h3>Does it work on every website?</h3>
        <p>This version works only on reddit.com, its subdomains, and redd.it short links.</p>
      </section>
      <section className={`${styles.card} section-card`} id="support">
        <h2 className="section-heading">Get support</h2>
        <p>Email <a href="mailto:jackwilliamleecampbell@gmail.com?subject=Desktop%20Please%20support">jackwilliamleecampbell@gmail.com</a> with your iOS version and a description of what happened. If relevant, include a public page link. Please do not send passwords or private browsing information.</p>
        <p>Desktop Please is an independent app and is not affiliated with or endorsed by Reddit.</p>
      </section>
    </div>
  )
}
