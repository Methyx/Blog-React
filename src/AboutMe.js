import ItemTitle from "./ItemTitle";
import ItemPicture from "./ItemPicture";
import ItemDescription from "./ItemDescription";
import photoPM from "./img/PM-identite(800).jpg";

const AboutMe = (props) => {
  return (
    <div className="item-box about-me">
      <ItemTitle text="About Me" />
      <ItemPicture link={photoPM} alt="Philippe MERCY" />
      <ItemDescription text="Développeur Web et Mobile, actuellement en formation à 'Le Reacteur'" />
    </div>
  );
};

export default AboutMe;
