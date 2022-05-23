import CompetitionImage from '../public/images/works/competition/1.jpg';
import CoopetitionImage from '../public/images/works/coopetition/1.jpg';
import ExpectingImage from '../public/images/works/expecting/1.jpg';
import FinalShotImage from '../public/images/works/final-shot/1.jpg';
import FirstStepImage from '../public/images/works/first-step/1.jpg';
import FulfillmentImage from '../public/images/works/fulfillment/1.jpg';
import IndomitableImage from '../public/images/works/indomitable/1.jpg';
import LoveImage from '../public/images/works/love/1.jpg';
import Love2Image from '../public/images/works/love-2/1.jpg';
import ProsperityImage from '../public/images/works/prosperity/1.jpg';
import ReachImage from '../public/images/works/reach/1.jpg';
import SeekingImage from '../public/images/works/seeking/1.jpg';
import SurpassImage from '../public/images/works/surpass/1.jpg';
import TurnIntoAdultImage from '../public/images/works/turn-into-adult/1.jpg';
import TurningAroundImage from '../public/images/works/turning-around/1.jpg';

import { StaticImageData } from 'next/image';

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
        "id": "competition",
        "name": "Competition",
        "enName": "Competition",
        "cnName": "競爭",
        "year": 2016,
        "staticImage": CompetitionImage
    },
    {
        "id": "coopetition",
        "name": "Coopetition",
        "enName": "Coopetition",
        "cnName": "競合 ",
        "year": 2017,
        "staticImage": CoopetitionImage
    },
    {
        "id": "love",
        "name": "Love",
        "enName": "Love",
        "cnName": "愛 ",
        "year": 2020,
        "staticImage": LoveImage
    },
    {
        "id": "love-2",
        "name": "Love 2",
        "enName": "Love 2",
        "cnName": "愛 2",
        "year": 2020,
        "staticImage": Love2Image
    },
    {
        "id": "expecting",
        "name": "Expecting",
        "enName": "Expecting",
        "cnName": "期待",
        "year": 2020,
        "staticImage": ExpectingImage
    },
    {
        "id": "first-step",
        "name": "First Step",
        "enName": "First Step",
        "cnName": "第一步",
        "year": 2020,
        "staticImage": FirstStepImage
    },
    {
        "id": "turn-into-adult",
        "name": "Turn into Adult",
        "enName": "Turn into Adult",
        "cnName": "轉大人",
        "year": 2020,
        "staticImage": TurnIntoAdultImage
    },
    {
        "id": "seeking",
        "name": "Seeking",
        "enName": "Seeking",
        "cnName": "找尋",
        "year": 2020,
        "staticImage": SeekingImage
    },
    {
        "id": "turning-around",
        "name": "Turning Around",
        "enName": "Turning Around",
        "cnName": "翻轉",
        "year": 2020,
        "staticImage": TurningAroundImage
    },
    {
        "id": "indomitable",
        "name": "Indomitable",
        "enName": "Indomitable",
        "cnName": "頂天立地",
        "year": 2019,
        "staticImage": IndomitableImage
    },
    {
        "id": "surpass",
        "name": "Surpass",
        "enName": "Surpass",
        "cnName": "跨越",
        "year": 2020,
        "staticImage": SurpassImage
    },
    {
        "id": "reach",
        "name": "Reach",
        "enName": "Reach",
        "cnName": "觸及",
        "year": 2021,
        "staticImage": ReachImage
    },
    {
        "id": "prosperity",
        "name": "Prosperity",
        "enName": "Prosperity",
        "cnName": "好孕連連",
        "year": 2021,
        "staticImage": ProsperityImage
    },
    {
        "id": "fulfillment",
        "name": "Fulfillment",
        "enName": "Fulfillment",
        "cnName": "圓滿",
        "year": 2021,
        "staticImage": FulfillmentImage
    },
    {
        "id": "final-shot",
        "name": "Final Shot",
        "enName": "Final Shot",
        "cnName": "臨門一腳",
        "year": 2021,
        "staticImage": FinalShotImage
    }
]

export default works;