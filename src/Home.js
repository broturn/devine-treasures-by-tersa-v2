import React from "react";
import Shop from "./Shop";
import image1 from "./images/secondpass.jpg";
import image2 from "./images/welcome.jpg";
import image3 from "./images/patriotic.jpg";
import image4 from "./images/buck.jpg";
import image5 from "./images/doe.jpg";
import image6 from "./images/sunflower.jpg";

function Home() {
  return (
     <div className="shop-products">
   
          <Shop
            id="0"
            title="Patriotic Doves"
            description="The stars and strips sparkle."
            price={50}
            image={ image1
              
            }
         alt="1" />

          <Shop
            id="1"
            title="Welcome"
            description= "A wreath sending a warm and welcoming message"
            price={50}
            image= { image2 }
          />

          <Shop
            id="2"
            title="Good Bless America"
            description=""
            price={50}
            image= { image3 }
             />
          <Shop
            id="3"
            title="Wooden Buck"
            description=""
            price={50}
            image= { image4 }
          />
          <Shop
            id="4"
            title="Wooden Doe"
            description=""
            price={50}
            image= { image5 }
          />

          <Shop
            id="5"
            title="Sunflower Archway"
            description=""
            price={50}
            image= { image6 }
            />
            </div>
  );
}

export default Home;
