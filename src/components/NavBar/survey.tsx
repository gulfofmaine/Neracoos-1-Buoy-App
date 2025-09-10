import Script from "next/script"
import Link from "next/link"

import { SecondaryBanner } from "components/SecondaryBanner"

export const SurveyBanner = () => (
  <>
    <SecondaryBanner>
      <p style={{ fontStyle: "italic", fontSize: "14px", marginBottom: "0px", textAlign: "center" }}>
        Click <Link href="https://www.surveymonkey.com/r/V5F5Z7P">here</Link> to take our Mariners&apos; Dashboard
        Survey
      </p>
    </SecondaryBanner>
    <Script id="surveymonkey">
      {`(function(t,e,s,o){var n,a,c;t.SMCX=t.SMCX||[],e.getElementById(o)||(n=e.getElementsByTagName(s),a=n[n.length-1],c=e.createElement(s),c.type="text/javascript",c.async=!0,c.id=o,c.src="https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgdzxwuSQVZA5gS55pIr4pOSayHdFxsUGzam09I6b2AHO9.js",a.parentNode.insertBefore(c,a))})(window,document,"script","smcx-sdk");`}
    </Script>
  </>
)
