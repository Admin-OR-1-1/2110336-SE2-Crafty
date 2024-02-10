import { FC } from "react";
import WaterfallContainer from "./_components/WaterfallContainer";

const HomePage: FC = () => {
  return (
    <div className="flex flex-col w-full gap-2 mx-auto bg-[#ffffff]">
      <WaterfallContainer />
    </div>
  );
};

export default HomePage;
