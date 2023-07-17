import Header from "./header";
import OurTeam from "./ourteam/page";

interface Props {
  children: React.ReactNode;
}

function HomeLayout({ children }: Props) {
  return (
    <div className=" max-w-full ">
      <Header />
      {children}
      <OurTeam />
    </div>
  );
}
export default HomeLayout;
