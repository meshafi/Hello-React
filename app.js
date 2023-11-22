import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://thumbs.dreamstime.com/b/food-delivery-logo-template-vector-icon-illustration-170869600.jpg" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const stylecard={
    backgroundColor:"#f0f0f0",
}
const RestrauntCards =(props)=> {
  return (
    <div className="res-cards" style={stylecard}>
        <img className="res-logo" src="https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani.jpg"></img>
        <h3>{props.resName}</h3>
        <h4>{props.cuisine}</h4>
        <h4>4.4 stars</h4>
        <h4>38 mins ETA </h4>
    </div>
  )
}
const Body=()=>{
    return (
        <div className="body">
            <div className="search">search</div>
            <div className="res-container">
                <RestrauntCards
                resName="Meghana Biryani"
                cuisine="Biriyani, Hyderabadi"
                />
                <RestrauntCards/>
            </div>
            
        </div>
    )
}
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
