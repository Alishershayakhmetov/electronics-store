import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Overview from "./components/overview";
import Block from "../../components/block";
import style from "./style.module.scss";
import images from "./images";
import { Link } from "react-router-dom";

export default function Profile() {
  const { category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (category === undefined) {
      navigate("my-account", { replace: true });
    }
  }, [category, navigate]);

  return (
    <Block style={{ backgroundColor: "#f0f1f2" }}>
      <div className={style.container}>
        <div className={style.AccountSidebar}>
          <AccountSidebar />
        </div>
        {category === "my-account" && <Overview />}
      </div>
    </Block>
  );
}

function AccountSidebar() {
  const [imageElements, setImageElements] = useState(images);
  const [active, setActive] = useState(null);
  return (
    <nav>
      <ul className={style.ulContainer}>
        {imageElements.map((item, index) => (
          <li key={index} className={style.liElem}>
            <Link
              to={`../account/${Object.keys(item)[0]}`}
              onClick={() => setActive(index)}
            >
              <div className={style.sidebarContainer}>
                <div
                  style={{
                    marginRight: "8px",
                    color: active === index ? "#2196f3" : "inherit",
                  }}
                >
                  {Object.values(item)[0]}
                </div>
                <span
                  style={{
                    color: active === index ? "#2196f3" : "inherit",
                  }}
                >
                  {Object.keys(item)[0].replace("-", " ")}
                </span>
                <div
                  style={{
                    position: "absolute",
                    right: "0",
                    alignItems: "center",
                    textAlign: "center",
                    display: "flex",
                  }}
                >
                  <svg
                    style={{ margin: "0 2px", width: "16px", height: "16px" }}
                    fill="none"
                    stroke="true"
                    viewBox="0 0 24 24 "
                  >
                    <path
                      d="M8 19.84L14.52 13.32C15.29 12.55 15.29 11.29 14.52 10.52L8 4"
                      stroke={index === active ? "#2196f3" : "#606971"}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="1.5"
                    ></path>
                  </svg>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
