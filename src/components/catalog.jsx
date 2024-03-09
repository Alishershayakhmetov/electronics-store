import style from "../css/catalog.module.css";
import PathMaker from "./pathMaker";

function CatalogItem({ number }) {
  const cateloriesPhotoURL = [
    "src/assets/catalog/Apple_iOS-update-iphone12pro.webp",
    "src/assets/catalog/Full-HD-LED-TV-PNG-Image.png",
    "src/assets/catalog/Stainless-steel-gas-cooker-with-oven-PNG.png",
    "src/assets/catalog/png-transparent-alloy-wheel-car-tire-car-wheel-technic-car-car-tires.png",
    "src/assets/catalog/laptop-with-blank-screen-isolate-on-transparent-background-ai-generated-png.webp",
    "src/assets/catalog/pngimg.com - sony_playstation_PNG17539.png",
    "src/assets/catalog/pngimg.com - washing_machine_PNG15580.png",
    "src/assets/catalog/png-transparent-buffet-tray-chafing-dish-food-warmer-chafing-dish-food-kitchen-appliance-small-appliance-thumbnail.png",
    "src/assets/catalog/download.png",
    "src/assets/catalog/pngimg.com - hair_dryer_PNG10.png",
    "src/assets/catalog/png-clipart-sofa-bed-chaise-longue-couch-ambiente-modern-furniture-chair-angle-furniture.png",
    "src/assets/catalog/png-transparent-gorenje-bo8kr-oven-476321-gorenje-bo8kr-oven-476321-kitchen-gorenje-built-in-oven-stainless-steel-476177-oven-kitchen-kitchen-appliance-home-appliance.png",
    "src/assets/catalog/png-clipart-norco-bicycles-hybrid-bicycle-commuting-bicycle-bicycle-frame-bicycle.png",
    "src/assets/catalog/plain-black-dslr-camera-free-png.webp",
  ];
  const categories = [
    "smartphones-and-gadgets",
    "tv-audio-and-musical-instruments",
    "kitchen-appliances",
    "automotive-and-transport",
    "laptops-and-computers",
    "all-for-gamers",
    "household-appliances",
    "kitchenware",
    "home-and-garden",
    "beauty-and-health",
    "furniture-and-home-interior",
    "built-in-appliances",
    "sports-tourism-and-luggage",
    "cameras",
  ];

  const generateItem = () => {
    const catalogList = [];
    for (let i = 0; i < number; i++) {
      catalogList.push(
        <li key={i}>
          <a
            href={`/catalog/${categories[i]}`}
            className={style.catalogFirstBtn}
          >
            <div className={style.catalogFirstImgLayer}>
              <img
                src={cateloriesPhotoURL[i]}
                className={style.catalogFirstImg}
              />
            </div>
            <p className={style.catalogFirstP}>
              {categories[i][0].toUpperCase() +
                categories[i].slice(1).replace(/-/g, " ")}
            </p>
          </a>
        </li>
      );
    }
    return catalogList;
  };
  return generateItem();
}

export default function Catalog() {
  const path = ["main", "all categories"];

  return (
    <section
      style={{ backgroundColor: "rgb(240, 241, 242)", padding: "20px 0" }}
    >
      <div>
        <PathMaker path={path} />
        <ul className={style.catalogFirst}>
          <CatalogItem number={14} />
        </ul>
        <ul></ul>
      </div>
    </section>
  );
}
