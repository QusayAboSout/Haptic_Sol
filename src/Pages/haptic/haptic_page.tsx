import "./hpatic_page.css";
import { useRef } from "react";
import "primeicons/primeicons.css";
import "../../core/services/carosel-items.service";

import { SpeedDial } from "primereact/speeddial";
import type { MenuItem } from "primereact/menuitem";
import Marquee from "react-fast-marquee";
import FooterPage from "./footer/footer";

function HapticPage() {
  const Home = useRef<HTMLDivElement>(null);
  const Work = useRef<HTMLDivElement>(null);
  const Pricing = useRef<HTMLDivElement>(null);
  const Careers = useRef<HTMLDivElement>(null);

  const menu: MenuItem[] = [
    {
      label: "Home",
      icon: "pi pi-home",
      command: () => {
        Home.current?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      label: "Work",
      icon: "pi pi-pencil",

      command: () => {
        Work.current?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      label: "Pricing",
      icon: "pi pi-dollar",

      command: () => {
        Pricing.current?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      label: "Careers",
      icon: "pi pi-briefcase",
      command: () => {
        Careers.current?.scrollIntoView({ behavior: "smooth" });
      },
    },
  ];
  return (
    <div
      className="flex flex-column overflow-y-hidden "
      style={{ margin: "-8px" }}
    >
      <div
        ref={Home}
        className="div1 flex flex-column justify-content-between div1-color"
      >
        <div className="flex justify-content-between flex-wrap">
          <label className="div1-title">Haptic</label>
          <SpeedDial
            buttonStyle={{
              color: "black",
              backgroundColor: "white",
              border: "none",
              borderColor: "none",
            }}
            className="fixed right-0 top-0 p-7"
            model={menu}
            direction="left"
            color="danger"
            style={{ top: "calc(50% - 2rem)" }}
            transitionDelay={10}
            showIcon="pi pi-bars"
            hideIcon="pi pi-times"
          />
        </div>
        <div className=" div1-paragraph align-items-end justify-content-end">
          <div>
            <label className="div1-l-text">We help</label>{" "}
            <i className="pi pi-spin pi-cog hidden md:text-2xl md:inline-block"></i>
            <label className="pl-2 md:pl-2">ambitious</label>
          </div>
          <div>
            <label>teams turn bold visions </label>
          </div>
          <div>
            <label className="md:pr-2">into</label>

            <i className="pi pi-spin pi-cog hidden md:text-2xl md:inline-block"></i>
            <label className="md:pl-2"> lasting impact.</label>
          </div>
        </div>
      </div>
      <div ref={Pricing} className="footer">
        <FooterPage></FooterPage>
      </div>
      <div
        ref={Work}
        className="flex align-items-center justify-content-center h-4rem font-bold"
      >
        <Marquee pauseOnHover>
          {/* {CaroselItemsService.getCaroselItemsData().map((item) => {
            return <ItemTemplate item={item}></ItemTemplate>;
          })} */}
        </Marquee>
      </div>
    </div>
  );
}

export default HapticPage;
