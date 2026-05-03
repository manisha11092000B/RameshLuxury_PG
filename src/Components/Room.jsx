import React from "react";

function Rooms() {
  const rooms = ["Single Room", "Double Sharing", "Triple Sharing"];

  return (
    <div id="Room" className="container my-5">
      <h2 className="text-center mb-4">Our Rooms</h2>
      <div className="row">
        {rooms.map((room, index) => (
          <div className="col-md-4" key={index}>
            <div className="card shadow">
              <img src="https://via.placeholder.com/300" className="card-img-top" />
              <div className="card-body text-center">
                <h5>{room}</h5>
                <p>Clean and comfortable rooms</p>
                <button className="btn btn-primary">View</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rooms;