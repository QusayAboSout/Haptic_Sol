import "./main-page.css";

import "primeicons/primeicons.css";
import "../../core/services/carosel-items.service";
import { Image } from "primereact/image";
import ItemTemplate from "./scrollable-carosel/item-template";
import { CaroselItemsService } from "../../core/services/carosel-items.service";
import Marquee from "react-fast-marquee";

function MainPage() {
  return (
    <div
      className="flex flex-wrap overflow-hidden w-full"
      style={{ height: "98.2vh" }}
    >
      <div className="col-6">
        <div
          className="border-round-sm font-bold text-4xl lg:text-7xl"
          style={{ lineHeight: "0.95" }}
        >
          <label className="pr-1" style={{ whiteSpace: "nowrap" }}>
            <label className=" pr-1 mainParagraph">A</label>
            <Image
              src={"/src/assets/oh-studio/image-button.avif"}
              alt="Image"
              width="20px"
              height="20px"
              preview
              indicatorIcon
              onClick={() =>
                (window.location.href =
                  "https://x.com/i/flow/login?redirect_after_login=%2Folvhrs")
              }
            />

            <label className="pl-1 mainParagraph">designer working</label>
          </label>
          <br />
          <label className="mainParagraph">with startups globally.</label>
          <br />
          <label className="mainParagraph">Currently steering the</label>
          <br />
          <div className="mainParagraph">
            <label>ship at</label>
            <label className="pl-1">
              <i className="pi pi-cog "></i>
            </label>
            <button
              className="haptic font-bold text-4xl lg:text-7xl"
              onClick={() => window.open("/haptic", "_blank")}
            >
              Haptic.
            </button>
          </div>
        </div>
      </div>

      <div className="col-6 flex justify-content-end">
        <div className="text-center border-round-sm w-2rem font-bold">
          <i className="pi pi-spin pi-cog sm:text-xl xl:text-4xl"></i>
        </div>
      </div>

      <div className="flex  xl:align-items-end align-items-center  flex-wrap">
        <Marquee pauseOnHover>
          {CaroselItemsService.getCaroselItemsData().map((item) => {
            return <ItemTemplate item={item}></ItemTemplate>;
          })}
        </Marquee>
      </div>
    </div>
  );
}

export default MainPage;
