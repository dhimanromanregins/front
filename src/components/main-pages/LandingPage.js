import React from 'react'

export default function LandingPage() {
  return (
    <section className="hero is-white has-text-centered">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column">
              <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Backend Developer, Frontend Developer &amp; Mentor</h1>
              <h2 className="subtitle is-size-4-tablet">I develop and architect elegantly efficient solutions, and I love what I do.</h2><img className="avatar" src="/mf-avatar.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="hero-foot">
      <img className="is-bottom" src="/hero-devices.svg" alt="Hero Devices" />
      </div>
    </section>
  )
}
