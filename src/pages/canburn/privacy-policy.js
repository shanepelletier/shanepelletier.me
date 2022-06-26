import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const CanburnPrivacyPolicy = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Canburn - Privacy Policy" />
      <h1>Privacy Policy</h1>
      <p>
        Canburn makes use of some personal data in order to provide you with the
        service.
      </p>
      <p>
        Canburn uses the Mapbox Maps SDK via{" "}
        <a href="https://github.com/rnmapbox/maps">rnmapbox/maps</a>. See the{" "}
        <a href="https://www.mapbox.com/legal/privacy">Mapbox Privacy Policy</a>{" "}
        for full details of the data collected. In summary, this application
        sends standard browsing information (IP address, system information,
        etc.) as well as limited location data. We use location data to provide
        you with a location marker on the map, but do not store or forward that
        data to any web server except as outlined in the Mapbox Privacy Policy.
      </p>
      <p>No other personal information is collected for any purpose.</p>
      <p>
        If you have any comments or concerns regarding this policy, please
        contact{" "}
        <a href="mailto:hello@shanepelletier.me">hello@shanepelletier.me</a>.
      </p>
    </Layout>
  )
}

export default CanburnPrivacyPolicy

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
