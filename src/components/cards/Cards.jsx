import React from "react";

const Cards = () => {
  return (
    <div>
      <div className="card m-3" style={{ width: "18rem", maxHeight: "360px" }}>
        <img className="card-img-top" 
        style={{height:"150px"}}
        src="https://source.unsplash.com/random/200×200/?book" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick examples.</p>
          <div className="container w-100">
            <select className="m-2 h-100 w-100 bg-success">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>

            <select className="m-2 h-100 w-100 bg-success rounded">
              <option value="Paper Back">Paper Back</option>
              <option value="Hard Cover">Harrd Cover</option>
            </select>

            <div className="h-100 fs-5">Total Price</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
