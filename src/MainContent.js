import Item from "./Item";
import image1 from "./img/pexels-andrea-piacquadio-3769982.jpg";
import image2 from "./img/pexels-george-milton-7034695.jpg";

const MainContent = (props) => {
  return (
    <>
      <Item
        title="Mon premier article"
        subtitle="ça n'est pas très original"
        imageLink={image1}
        imageAlt="homme lisant un livre"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid molestiae eaque aliquam deleniti, neque rerum adipisci sunt id mollitia consectetur explicabo? Repellat ab delectus deleniti dignissimos veritatis soluta modi et."
      />
      <Item
        title="Mon second article"
        subtitle="ça n'est pas beaucoup plus original"
        imageLink={image2}
        imageAlt="femme lisant un livre"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid molestiae eaque aliquam deleniti, neque rerum adipisci sunt id mollitia consectetur explicabo? Repellat ab delectus deleniti dignissimos veritatis soluta modi et.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium nostrum facere vel, dicta rerum soluta dolor aliquid hic molestias iusto voluptates necessitatibus autem. Dicta itaque dignissimos, eveniet non alias minima."
      />
    </>
  );
};

export default MainContent;
