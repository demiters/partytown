import Head from 'next/head';
import Script from 'next/script';
//import { Partytown } from '@builder.io/partytown/react';

const GTM_ID = "GTM-MZL56GH4";
const GA4_ID = "G-P22NDNX298";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js</title>
        <link
          rel="icon"
          id="favicon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎉</text></svg>"
        />
        {/*<Partytown
          debug={true}
          //forward={['dataLayer.push']} // commenting this out fixed CORS for a brief moment? huh
          lib={'/_next/static/~partytown/'}
        />*/}
      </Head>

      <main>
        <h1>Next.js with 🎉</h1>

        <p>
          inline <code>{'<script>'}</code> with <code>type="text/partytown"</code>:
          <span id="output-script" />
        </p>
        
        <p>
          inline <code>{'<Script>'}</code> with <code>type="text/partytown"</code>:
          <span id="output-next-script" />
        </p>
        
        <p>
          inline <code>{'<Script>'}</code> with <code>strategy="worker"</code>:
          <span id="output-next-script-worker" />
        </p>

        <p>
          Google Tag Manager inline <code>{'<Script>'}</code> with <code>strategy="worker"</code>:
          <span id="output-next-script-worker-gtm" />
        </p>

        <Script
          id="gtm-worker"
          strategy="worker"
        >
          {`(function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
              'gtm.start': new Date().getTime(),
              event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
          })(window, document, 'script', 'dataLayer', '${GTM_ID}')`}
        </Script>
        
        {/***** GTAG SCRIPTS
        
        <Script
          id="gtag-worker-url"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
        >
        </Script>
        
        <Script
          id="gtag-worker-inline"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA4_ID}');
          `}
        </Script>
        */}

        {/***** BASIC INLINE SCRIPTS *****/}

        <Script
          id="next-script-worker-inline"
          strategy="worker"
          dangerouslySetInnerHTML={{
            __html: `
              document.getElementById('output-next-script-worker').textContent = 'passed';
            `,
          }}
        />

        <Script
          id="next-script-tp-inline"
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `
              document.getElementById('output-next-script').textContent = 'passed';
            `,
          }}
        />

        <script
          id="script-tp-inline"
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `
              document.getElementById('output-script').textContent = 'passed';
              document.body.classList.add('completed');
            `,
          }}
        />
      </main>
    </>
  );
}
