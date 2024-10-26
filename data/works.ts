import CompetitionImage from "../public/images/works/competition/1.jpg";
import CoopetitionImage from "../public/images/works/coopetition/1.jpg";
import ExpectingImage from "../public/images/works/expecting/1.jpg";
import FinalShotImage from "../public/images/works/final-shot/1.jpg";
import FirstStepImage from "../public/images/works/first-step/1.jpg";
import FulfillmentImage from "../public/images/works/fulfillment/1.jpg";
import IndomitableImage from "../public/images/works/indomitable/1.jpg";
import LoveImage from "../public/images/works/love/1.jpg";
import Love2Image from "../public/images/works/love-2/1.jpg";
import ProsperityImage from "../public/images/works/prosperity/1.jpg";
import ReachImage from "../public/images/works/reach/1.jpg";
import SeekingImage from "../public/images/works/seeking/1.jpg";
import SurpassImage from "../public/images/works/surpass/1.jpg";
import TurnIntoAdultImage from "../public/images/works/turn-into-adult/1.jpg";
import TurningAroundImage from "../public/images/works/turning-around/1.jpg";
import GirlsFeelingsImage from "../public/images/works/girls-feelings/1.jpg";
import GoodFortuneImage from "../public/images/works/good-fortune/1.jpg";
import SunriseSunshineImage from "../public/images/works/sunrise-sunshine/1.jpg";
import HoverImage from "../public/images/works/hover/1.jpg";
import BlossomElegance1Image from "../public/images/works/blossom-elegance-1/1.jpg";
import BlossomElegance2Image from "../public/images/works/blossom-elegance-2/1.jpg";
import BlossomElegance3Image from "../public/images/works/blossom-elegance-3/1.jpg";
import EnlightenmentImage from "../public/images/works/enlightenment/1.jpg";
import SoaringImage from "../public/images/works/soaring/1.jpg";
import BashfulImage from "../public/images/works/bashful/1.jpg";
import ListeningImage from "../public/images/works/listening/1.jpg";
import HuntingImage from "../public/images/works/hunting/1.jpg";
import Reach2Image from "../public/images/works/reach-2/1.jpg";
import MeltingImage from "../public/images/works/melting/1.jpg";

import { StaticImageData } from "next/legacy/image";

interface Work {
  id: string;
  name: string;
  enName?: string;
  cnName?: string;
  year: number;
  staticImage: StaticImageData;
}

const works: Work[] = [
  {
    id: "competition",
    name: "Competition",
    enName: "Competition",
    cnName: "競爭",
    year: 2016,
    staticImage: CompetitionImage,
  },
  {
    id: "coopetition",
    name: "Coopetition",
    enName: "Coopetition",
    cnName: "競合 ",
    year: 2017,
    staticImage: CoopetitionImage,
  },
  {
    id: "love",
    name: "Love",
    enName: "Love",
    cnName: "愛 ",
    year: 2020,
    staticImage: LoveImage,
  },
  {
    id: "love-2",
    name: "Love 2",
    enName: "Love 2",
    cnName: "愛 2",
    year: 2020,
    staticImage: Love2Image,
  },
  {
    id: "expecting",
    name: "Expecting",
    enName: "Expecting",
    cnName: "期待",
    year: 2020,
    staticImage: ExpectingImage,
  },
  {
    id: "first-step",
    name: "First Step",
    enName: "First Step",
    cnName: "第一步",
    year: 2020,
    staticImage: FirstStepImage,
  },
  {
    id: "turn-into-adult",
    name: "Turn into Adult",
    enName: "Turn into Adult",
    cnName: "轉大人",
    year: 2020,
    staticImage: TurnIntoAdultImage,
  },
  {
    id: "seeking",
    name: "Seeking",
    enName: "Seeking",
    cnName: "找尋",
    year: 2020,
    staticImage: SeekingImage,
  },
  {
    id: "turning-around",
    name: "Turning Around",
    enName: "Turning Around",
    cnName: "翻轉",
    year: 2020,
    staticImage: TurningAroundImage,
  },
  {
    id: "indomitable",
    name: "Indomitable",
    enName: "Indomitable",
    cnName: "頂天立地",
    year: 2019,
    staticImage: IndomitableImage,
  },
  {
    id: "surpass",
    name: "Surpass",
    enName: "Surpass",
    cnName: "跨越",
    year: 2020,
    staticImage: SurpassImage,
  },
  {
    id: "reach",
    name: "Reach",
    enName: "Reach",
    cnName: "觸及",
    year: 2021,
    staticImage: ReachImage,
  },
  {
    id: "prosperity",
    name: "Prosperity",
    enName: "Prosperity",
    cnName: "好孕連連",
    year: 2021,
    staticImage: ProsperityImage,
  },
  {
    id: "fulfillment",
    name: "Fulfillment",
    enName: "Fulfillment",
    cnName: "圓滿",
    year: 2021,
    staticImage: FulfillmentImage,
  },
  {
    id: "final-shot",
    name: "Final Shot",
    enName: "Final Shot",
    cnName: "臨門一腳",
    year: 2021,
    staticImage: FinalShotImage,
  },
  {
    id: "girls-feelings",
    name: "Girl's Feelings",
    enName: "Girl's Feelings",
    cnName: "少女情懷",
    year: 2022,
    staticImage: GirlsFeelingsImage,
  },
  {
    id: "good-fortune",
    name: "Good Fortune",
    enName: "Good Fortune",
    cnName: "福氣",
    year: 2022,
    staticImage: GoodFortuneImage,
  },
  {
    id: "sunrise-sunshine",
    name: "Sunrise Sunshine",
    enName: "Sunrise Sunshine",
    cnName: "臨門一腳",
    year: 2021,
    staticImage: SunriseSunshineImage,
  },
  {
    id: "hover",
    name: "Hover",
    enName: "Hover",
    cnName: "懸停",
    year: 2023,
    staticImage: HoverImage,
  },
  {
    id: "blossom-elegance-1",
    name: "Blossom Elegance 1",
    enName: "Blossom Elegance 1",
    cnName: "女大十八變 - 窈窕淑女 1",
    year: 2023,
    staticImage: BlossomElegance1Image,
  },
  {
    id: "blossom-elegance-2",
    name: "Blossom Elegance 2",
    enName: "Blossom Elegance 2",
    cnName: "女大十八變 - 窈窕淑女 2",
    year: 2023,
    staticImage: BlossomElegance2Image,
  },
  {
    id: "blossom-elegance-3",
    name: "Blossom Elegance 3",
    enName: "Blossom Elegance 3",
    cnName: "女大十八變 - 窈窕淑女 3",
    year: 2023,
    staticImage: BlossomElegance3Image,
  },
  {
    id: "enlightenment",
    name: "Enlightenment",
    enName: "Enlightenment",
    cnName: "天啓",
    year: 2023,
    staticImage: EnlightenmentImage,
  },
  {
    id: "soaring",
    name: "Soaring",
    enName: "Soaring",
    cnName: "扶搖直上",
    year: 2023,
    staticImage: SoaringImage,
  },
  {
    id: "bashful",
    name: "Bashful",
    enName: "Bashful",
    cnName: "羞澀",
    year: 2024,
    staticImage: BashfulImage,
  },
  {
    id: "listening",
    name: "Listening",
    enName: "Listening",
    cnName: "傾聽",
    year: 2024,
    staticImage: ListeningImage,
  },
  {
    id: "hunting",
    name: "Hunting",
    enName: "Hunting",
    cnName: "獵物",
    year: 2024,
    staticImage: HuntingImage,
  },
  {
    id: "reach-2",
    name: "Reach 2",
    enName: "Reach 2",
    cnName: "觸及 2",
    year: 2024,
    staticImage: Reach2Image,
  },
  {
    id: "melting",
    name: "Melting",
    enName: "Melting",
    cnName: "融雪",
    year: 2024,
    staticImage: MeltingImage,
  },
];

export default works;
