import React from "react";
import { createRoot } from "react-dom/client";

const UserDetails = ({ name, surname, address, postcode, city }) => {
  return (
    <div className="card">
      <div>
        <h5>
          {name} {surname}
        </h5>
        <div>{address}</div>
        <div>
          {postcode} {city}
        </div>
      </div>
    </div>
  );
};

const user = {
  name: "Anthony",
  surname: "Fantano",
  address: "65 main stret",
  postcode: 18805,
  city: "Florida",
};

const App = () => {
  return <UserDetails {...user} />;
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
