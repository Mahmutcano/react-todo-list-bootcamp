import { memo } from "react";
import Button from "./Button";
import { useUser } from "../context/UserContext";
import Title from "./Title";

const Header = () => {
  const { user, setUser } = useUser();
  console.log(user);

  // Çıkış Yapma
  const logoutHandle = () => {
    setUser(false);
  };
  return (
    <div className="bg-brand-white">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="hidden md:inline">
              <Title title={user.email} />
            </span>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <Button title={"Çıkış Yap"} onClick={logoutHandle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
