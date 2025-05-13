import { Card } from "primereact/card";
import ReactPlayer from "react-player";
import Marquee from "react-fast-marquee";
import "./item-template.css";
import { classNames } from "primereact/utils";
function ItemTemplate(props: any) {
  const header = (
    <div className="flex gap-2">
      <div className="">
        <div className="border-round-sm font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 124 124"
            fill="none"
          >
            <rect width="124" height="124" rx="24" fill="#F97316" />
            <path
              d="M19.375 36.7818V100.625C19.375 102.834 21.1659 104.625 23.375 104.625H87.2181C90.7818 104.625 92.5664 100.316 90.0466 97.7966L26.2034 33.9534C23.6836 31.4336 19.375 33.2182 19.375 36.7818Z"
              fill="white"
            />
            <circle cx="63.2109" cy="37.5391" r="18.1641" fill="black" />
            <rect
              opacity="0.4"
              x="81.1328"
              y="80.7198"
              width="17.5687"
              height="17.3876"
              rx="4"
              transform="rotate(-45 81.1328 80.7198)"
              fill="#FDBA74"
            />
          </svg>
        </div>
      </div>

      <div className="">
        <div className="col font-bold p-0">{props.item.headTitle}</div>
        <div className="col p-0">{props.item.headBody}</div>
      </div>
    </div>
  );
  const footer = props.item.isImage ? (
    <div>
      <img
        className="xl:w-25rem w-18rem lg:h-25rem md-5rem"
        alt="Card"
        src={props.item.body}
        style={{
          objectFit: "contain",
        }}
      />
    </div>
  ) : (
    <div>
      <ReactPlayer
        url={props.item.body}
        loop
        muted
        playing
        stopOnUnmount
        width={"400px"}
        height={"400px"}
      ></ReactPlayer>
    </div>
  );

  return (
    <div className="card p-1">
      <Card
        unstyled
        border-0
        footer={footer}
        header={header}
        className="border-none"
      ></Card>
    </div>
  );
}

export default ItemTemplate;
