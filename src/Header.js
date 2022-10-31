import Title from "./Title";
import Baseline from "./Baseline";

const Header = (props) => {
  return (
    <div className="blog-header">
      <Title text="Mon Blog" />
      <Baseline text="Blog réalisé en React.js" />
    </div>
  );
};

export default Header;
