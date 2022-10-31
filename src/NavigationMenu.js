import Link from "./Link";

const NavigationMenu = (props) => {
  return (
    <div className="navigation-menu">
      <div className="left">
        <Link link="#" text="Section 1" />
        <Link link="#" text="Section 2" />
        <Link link="#" text="Section 3" />
      </div>
      <div className="right">
        <Link link="#" text="Contact" />
      </div>
    </div>
  );
};

export default NavigationMenu;
