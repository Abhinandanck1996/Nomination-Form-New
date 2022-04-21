import React, { useState } from 'react';
import JSON from './project.json';
import { btnDanger,btnSuccess ,bestDiscount,leastDiscount} from './Global';


const Promismethod = () => {
    let[color,setColor]=useState(JSON.products)
  return (
    <section className="secBlock">
      <article className="artBlock">
        {color.map(value => {
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
              <a href="#">Add Item</a>
              <h4
                style={
                  value.price > 600
                    ? {
                        color: btnSuccess.color,
                      }
                    : { color: btnDanger.color }
                }
              >
                Price:${value.price}
              </h4>
              <h6
                id="p1"
                style={
                  value.discountPercentage>10
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
        })}
      </article>
    </section>
  );
}

export default Promismethod