import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import { Alert, AlertDescription } from "./ui/alert";
import { OctagonAlert, X } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const alertVisible = sessionStorage.getItem("alertVisible");
    if (alertVisible === "false") {
      setVisible(false);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("alertVisible", visible.toString());
  }, [visible]);
  return (
    <>
      {visible && (
        <Alert className={`bg-orange-400 text-white`}>
          <AlertDescription className="flex justify-center gap-2 font-bold tracking-tight text-white text-red-900">
            <OctagonAlert className="w-5 h-5 text-red-900" />
            Requests delay may take up to 50 seconds only for the first time of
            launching the website!
            <OctagonAlert className="w-5 h-5 text-red-900" />
          </AlertDescription>
          <button
            onClick={() => setVisible(false)}
            className="ml-4 absolute top-2.5 right-5 bg-red-800 rounded-md text-red-300 animate-pulse hover:scale-110"
          >
            <X />
          </button>
        </Alert>
      )}
      <div className="border-b-2 border-b-orange-500 py-6">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            className="text-3xl font-bold tracking-tight text-orange-500"
            to="/"
          >
            MERNEats.com
          </Link>
          <div className="md:hidden">
            <MobileNav />
          </div>
          <div className="hidden md:block">
            <MainNav />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
