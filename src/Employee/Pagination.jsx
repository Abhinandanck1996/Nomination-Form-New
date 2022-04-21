import React, { useState } from "react";
import JSON from "./project.json";
import {bestDiscount, btnDanger,btnSuccess,leastDiscount} from './Global'

const Pagination = () => {
  let [color, setColor] = useState(JSON.products);
  let [picture, setPicture] = useState(0);
  return (
    <>
      <div>
        <button onClick={() => setPicture(0)}>
          <i class="fas fa-angle-right"></i>
        </button>
        <button onClick={() => setPicture(1)}>2</button>
        <button onClick={() => setPicture(2)}>3</button>
        <button onClick={() => setPicture(3)}>
          <i class="fas fa-angle-left"></i>
        </button>
      </div>

      <section className="secBlock">
        <article className="artBlock">
          {color.map((value, index) => {
            
            if (index >= 8 * picture && index <= 7 + 8 * picture) {
              return (
                <div>
                  <figure>
                    <img src={value.thumbnail} alt={value.title} />
                  </figure>
                  <h3>{value.title}</h3>
                  <h6
                    id="p2"
                    style={
                      value.rating > 4.42
                        ? {
                            background: btnSuccess.background,
                          }
                        : { background: btnDanger.background }
                    }
                  >
                    Rating:{value.rating}
                  </h6>
                  <h4>Price:${value.price}</h4>
                  <h6
                    id="p1"
                    style={
                      value.discountPercentage > 8
                        ? {
                            color: bestDiscount.color,
                          }
                        : { color: leastDiscount.color }
                    }
                  >
                    {value.discountPercentage}% off available
                  </h6>
                  <p>{value.description}</p>
                </div>
              );
            }
          })}
        </article>
      </section>
    </>
  );
};

export default Pagination;
