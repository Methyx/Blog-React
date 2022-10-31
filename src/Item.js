import ItemTitle from "./ItemTitle";
import ItemSubtitle from "./ItemSubtitle";
import ItemPicture from "./ItemPicture";
import ItemDescription from "./ItemDescription";

const Item = (props) => {
  return (
    <div className="item-box">
      <ItemTitle text={props.title} />
      <ItemSubtitle text={props.subtitle} />
      <ItemPicture link={props.imageLink} alt={props.imageAlt} />
      <ItemDescription text={props.description} />
    </div>
  );
};

export default Item;
