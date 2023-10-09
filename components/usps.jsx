const { Sailboat, Fish } = require("lucide-react");
const { TextLarge, TextMuted } = require("./ui/texts");

const Usps = () => {
  return (
    <div className="mt-6 mx-6 pt-6 border-t-[1px] border-slate-300">
      <div className="flex items-center">
        <Sailboat className="shrink-0" />
        <div className="ml-4">
          <TextLarge>Serene Backwaters</TextLarge>
          <TextMuted>{"Embark on a journey through the picturesque backwaters of Kerala, where nature's beauty unfolds around every bend. Glide through tranquil lakes and winding canals while the lush greenery and coconut palms create a mesmerizing backdrop."}</TextMuted>
        </div>
      </div>
      
      <div className="mt-6 flex items-center">
        <Fish className="shrink-0" />
        <div className="ml-4">
          <TextLarge> Kerala Cuisine</TextLarge>
          <TextMuted>{"Indulge your taste buds in the flavors of Kerala with our mouthwatering cuisine. Our skilled chefs will delight you with authentic Kerala dishes, blending spices and local ingredients to create a culinary experience you won't forget."}</TextMuted>
        </div>
      </div>
    </div>
  );
};

export default Usps;