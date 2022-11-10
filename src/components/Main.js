import React from "react"
import '../Styles/Main.css'

export default function Main() {
    return (
        <div className="main">
            <div className="topBody">
                <h2>Content</h2>
            </div>
            <div className="middleBody col-12">
              <div className="row">
                <div className="middleBodyC1 col-4">
                    <h2>Content</h2>
                </div>
                <div className="middleBodyC2 col-4">
                    <h2>Content</h2>
                </div>
                <div className="middleBodyC3 col-4">
                    <h1>Content</h1>
                </div>
              </div>
            </div>
            <div className="bottomBody">
                  <h2>Content</h2>
            </div>
        </div>
    )
}