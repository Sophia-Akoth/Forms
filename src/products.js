import React from "react";
import "./App.css";

class Shoes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ["Sneakers", "Stilletos", "Boots", "Jordans"],
      price: [3000, 1500, 2000, 5000],
      name: ["Adidas", "Stiletto", "Ankle Boots","Air Jordan 1"]
    };
  }
  render() {
    return (


      <div style={{textAlign: "center"}}>

        <section className="products">
    <div className="wrapper">
      <div className="img-container">
      <img className="photo" src="images/adidas1.jpg"/>
      </div>
      <div className="info">
      <h3>{this.state.name[0]}</h3>
        <p>Drip</p>
      </div>
    
      <div className="price">
      <h3>Ksh {this.state.price[0]}</h3>
      </div>
<div className="add-to-cart"><button className="add-to-cart-btn">Order now</button>
</div>
    </div>

    <div className="wrapper">
      <div className="img-container">
      <img className="photo" src="images/stilleto1.jpg"/>
      </div>
      <div className="info">
      <h3>{this.state.name[1]}</h3>
        <p>Drip</p>
      </div>
    
      <div className="price">
      <h3>Ksh {this.state.price[1]}</h3>
      </div>
<div className="add-to-cart"><button className="add-to-cart-btn">Order now</button>
</div>
    </div>


    <div className="wrapper">
      <div className="img-container">
      <img className="photo" src="images/boot3.jpg"/>
      </div>
      <div className="info">
      <h3>{this.state.name[2]}</h3>
        <p>Drip</p>
      </div>
    
      <div className="price">
      <h3>Ksh {this.state.price[2]}</h3>
      </div>
<div className="add-to-cart"><button className="add-to-cart-btn">Order now</button>
</div>
    </div>



    <div className="wrapper">
      <div className="img-container">
      <img className="photo" src="images/jordan3.jpg"/>
      </div>
      <div className="info">
      <h3>{this.state.name[3]}</h3>
        <p>Drip</p>
      </div>
    
      <div className="price">
      <h3>Ksh {this.state.price[3]}</h3>
      </div>
<div className="add-to-cart"><button className="add-to-cart-btn">Order now</button>
</div>
    </div>


    <div className="wrapper">
      <div className="img-container">
      <img className="photo" src="images/adidas2.jpg"/>
      </div>
      <div className="info">
      <h3>{this.state.name[0]}</h3>
        <p>Drip</p>
      </div>
    
      <div className="price">
      <h3>Ksh {this.state.price[0]}</h3>
      </div>
<div className="add-to-cart"><button className="add-to-cart-btn">Order now</button>
</div>
    </div>



    <div className="wrapper">
      <div className="img-container">
      <img className="photo" src="images/stiletto3.jpg"/>
      </div>
      <div className="info">
      <h3>{this.state.name[1]}</h3>
        <p>Drip</p>
      </div>

      <div className="price">
      <h3>Ksh {this.state.price[1]}</h3>
      </div>
<div className="add-to-cart"><button className="add-to-cart-btn">Order now</button>
</div>
    </div>



    <div className="wrapper">
      <div className="img-container">
      <img className="photo" src="images/boot2.jpg"/>
      </div>
      <div className="info">
      <h3>{this.state.name[2]}</h3>
        <p>Drip</p>
      </div>
   
      <div className="price">
      <h3>Ksh {this.state.price[2]}</h3>
      </div>
<div className="add-to-cart"><button className="add-to-cart-btn">Order now</button>
</div>
    </div>



    <div className="wrapper">
      <div className="img-container">
      <img className="photo" src="images/jordan4.jpg"/>
      </div>
      <div className="info">
      <h3>{this.state.name[3]}</h3>
        <p>Drip</p>
      </div>
      <div className="price">
      <h3>Ksh {this.state.price[3]}</h3>
      </div>
<div className="add-to-cart"><button className="add-to-cart-btn">Order now</button>
</div>
    </div>




        </section>
      </div>
      
    );


  }

}
export default Shoes;