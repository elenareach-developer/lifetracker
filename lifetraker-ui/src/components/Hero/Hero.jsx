import * as React from "react"
import watch from "../../assets/watch.jpg"
import "./Hero.css"

export default function Home() {
  return (
    <div className="hero">

      <div className="item">
          <h1 className="whiteText noTop">Welcome!</h1>
          <h4 className="noTop">Find your Merch</h4>
          <div className="noTop smallText">We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready.</div>
        </div>
        <div className="item"> <img src={watch} className="hero_img" alt="codepath logo" /></div>
    </div>
  )
}
