import { TextH2, TextLarge, TextP } from "../ui/texts";
import Separator from "../ui/separator";
import { ModeToggle } from "../mode-toggle";

const TemporaryHome = () => {
  return (
    <div className="min-h-screen pb-6 flex flex-col justify-center items-center">
      <div className="text-center mx-6">
        <TextH2 className=''>Welcome to <span className="text-primary whitespace-nowrap">Book A Boat - IN</span></TextH2>
        <TextLarge className="mt-3">Exciting Things Are Coming!</TextLarge>
        <TextP className="mt-1 text-sm">Stay tuned for updates on our houseboat booking platform in Alappuzha, Kerala.</TextP>
      </div>
      <Separator className="mt-6 mx-6" />
      <ModeToggle />
    </div>
  );
};

export default TemporaryHome;
