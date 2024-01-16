import { FC } from "react";

const HomePage: FC = () => {
  return (
    <div className="flex flex-col w-full gap-2 max-w-[1080px] mx-auto">
      <span>Home Page</span>
      <button className="btn btn-primary">test</button>
    </div>
  );
};

export default HomePage;
