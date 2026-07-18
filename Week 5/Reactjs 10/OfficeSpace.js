import React from "react";

function OfficeSpace() {
  const officeSpaces = [
    {
      name: "Tech Park",
      rent: 55000,
      address: "Bangalore",
      image: "/office.jpg",
    },
    {
      name: "Business Hub",
      rent: 75000,
      address: "Hyderabad",
      image: "/office.jpg",
    },
    {
      name: "Corporate Tower",
      rent: 62000,
      address: "Pune",
      image: "/office.jpg",
    },
  ];

  return (
    <div>
      <h1>Office Space Rental App</h1>

      {officeSpaces.map((office, index) => (
        <div
          key={index}
          style={{
            border: "1px solid black",
            padding: "15px",
            margin: "15px",
            width: "350px",
          }}
        >
          <img
            src={office.image}
            alt="Office"
            width="300"
            height="200"
          />

          <h3>{office.name}</h3>

          <p>
            <b>Rent:</b>{" "}
            <span
              style={{
                color:
                  office.rent < 60000
                    ? "red"
                    : "green",
              }}
            >
              ₹{office.rent}
            </span>
          </p>

          <p>
            <b>Address:</b> {office.address}
          </p>
        </div>
      ))}
    </div>
  );
}

export default OfficeSpace;