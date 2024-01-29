import { TextH3, TextLarge, TextP } from "../ui/texts";
import Separator from "../ui/separator";
import { ModeToggle } from "../mode-toggle";

const TemporaryHome = () => {
  return (
    <div className="min-h-screen pb-6 flex flex-col justify-center">
      <div className="mt-6 mx-6">
        <TextH3 className=''>Exciting Things Are Coming!</TextH3>
        <TextLarge className="mt-3">Stay tuned for updates on our houseboat booking platform in Alappuzha, Kerala.</TextLarge>
        <TextP className="mt-1 text-sm">Explore and book unique houseboat experiences soon!</TextP>
      </div>
      <Separator className="mt-6 mx-6" />
    </div>
  );
};

export default TemporaryHome;
