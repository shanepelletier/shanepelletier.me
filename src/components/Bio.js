import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
        }}
      >
        <img
          src={profilePic}
          alt={`Shane Pelletier`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            borderRadius: "50%",
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Hi! I'm Shane. I spend my time working to improve humanity, one idea
          at a time. You can find me on <a href="https://github.com/shanepelletier">GitHub</a> and <a href="https://www.linkedin.com/in/shane-pelletier-4086ab7a/">LinkedIn</a>.
        </p>
      </div>
    )
  }
}

export default Bio
