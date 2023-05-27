import * as React from "react"
import "./About.css"
import watch from "../../assets/watch.jpg"

export default function About() {
  return (
    <div className="about">
      <div className="item"> <img src={watch} alt="codepath logo" />
      </div>
      <div className="smallText item">The codepath student store offers great products at great prices from a great team and for a great cause.
We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place. All proceeds go towards bringing high quality CS education to college students around the country.
      </div>
    </div>
  )
}
