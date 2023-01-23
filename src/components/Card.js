
import React from 'react'
import "./Card.css";
const img1 = require("../img/istockphoto-576544696-1024x1024.jpg");
const img2 = require("../img/photo_2023-01-11_15-51-50.jpg");
const img3 = require("../img/photo_2023-01-11_15-53-41.jpg");

export default function Card(props) {
const {design, type, child, text, text2, text3} = props
  return (
   <>
   
   
   <div className="big">
        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="col-3">
              <div className="card">
                <img src={img1} class="card-img-top" alt="..." />
                <div className="card-body">
                  <h1>{text}</h1>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button className={design || "blue" }>Button</button>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <img src={img2} class="card-img-top" alt="..." />
                <div className="card-body">
                <h1>{text2}</h1>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button className={type || "blue" }>Button</button>

                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <img src={img3} class="card-img-top" alt="..." />
                <div className="card-body">
                <h1>{text3}</h1>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button className={child || "blue" }>Button</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

