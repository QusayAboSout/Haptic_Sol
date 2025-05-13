import "../models/carosel-item";
import type { CaroselItem } from "../models/carosel-item";
export const CaroselItemsService = {
  getCaroselItemsData() {
    let caroselList: CaroselItem[] = [
      {
        id: 1,
        headTitle: "Soul",
        headBody: "Bigcommerce theme",
        headImage: "string",
        body: "/src/assets/oh-studio/body-images/soul.jpg",
        isImage: true,
      },
      {
        id: 2,
        headTitle: "Aire",
        headBody: "A better way for everyday",
        headImage: "string",
        body: "/src/assets/oh-studio/body-images/aire.avif",
        isImage: true,
      },
      {
        id: 3,
        headTitle: "Three Notch Group",
        headBody: "Building the future",
        headImage: "string",
        body: "/src/assets/oh-studio/body-images/three-notch-group.mp4",
        isImage: false,
      },
      {
        id: 4,
        headTitle: "Wealth Tracker",
        headBody: "Track your net worth",
        headImage: "string",
        body: "/src/assets/oh-studio/body-images/wealth_tracker.avif",
        isImage: true,
      },
      {
        id: 5,
        headTitle: "Momentify",
        headBody: "Unforgettable live music experiences",
        headImage: "string",
        body: "/src/assets/oh-studio/body-images/momentify.avif",
        isImage: true,
      },
      {
        id: 6,
        headTitle: "Correlated",
        headBody: "Tap into your customer data",
        headImage: "string",
        body: "/src/assets/oh-studio/body-images/correlated.avif",
        isImage: true,
      },
      {
        id: 7,
        headTitle: "Remi",
        headBody: "Sustainable home improvement",
        headImage: "string",
        body: "/src/assets/oh-studio/body-images/remi.avif",
        isImage: true,
      },

      {
        id: 8,
        headTitle: "Tecton",
        headBody: "AI data engineering",
        headImage: "string",
        body: "/src/assets/oh-studio/body-images/tecton.mp4",
        isImage: false,
      },
      {
        id: 9,
        headTitle: "Playmind",
        headBody: "Your gaming AI companion",
        headImage: "string",
        body: "/src/assets/oh-studio/body-images/playmind.mp4",
        isImage: false,
      },
      {
        id: 10,
        headTitle: "Altitude",
        headBody: "Ecommerce concepts",
        headImage: "string",
        body: "/src/assets/oh-studio/body-images/altitude.mp4",
        isImage: false,
      },
      {
        id: 11,
        headTitle: "Spark",
        headBody: "Trading platform",
        headImage: "string",
        body: "/src/assets/oh-studio/body-images/spark.avif",
        isImage: true,
      },
      {
        id: 12,
        headTitle: "Norby",
        headBody: "Your AI data analyst",
        headImage: "string",
        body: "/src/assets/oh-studio/body-images/norby.mp4",
        isImage: false,
      },
      {
        id: 13,
        headTitle: "Propeller",
        headBody: "Launching revolutionary ideas",
        headImage: "string",
        body: "/src/assets/oh-studio/body-images/propeller.mp4",
        isImage: false,
      },
    ];

    return caroselList;
  },
};