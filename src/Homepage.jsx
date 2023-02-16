import {useEffect, useRef, useState} from "react";
import Image from "next/image";
import logo from "./images/logoFull.png"
import Link from "next/link";
import learningIcon from "./images/learning-icon.webp"
import dirIcon from "./images/dir-icon.png"
import groupIcon from "./images/gruop-learning.webp"
import singleIcon from "./images/person-learning.png"
import eIcon from "./images/e-learning-icon.png"
import html5bg from "./images/html5svg-cropped.svg"
import css3bg from "./images/css3_icon.svg"
import css3 from "./images/css3.svg"
import jsSvg from "./images/jsSvg.svg"
import reactSvg from "./images/reactSvg.png"
import Head from "next/head";

export default function Homepage() {

    const [windowWidth, setWindowWidth] = useState()

    useEffect(() => {
        setWindowWidth(window.innerWidth);
    })

    return (
        <>
            <div className="banner">
                <div className={"logo-side"}>
                    <Image src={logo} alt="logo-everest"/>
                </div>
                <div className={"ad-side"}>
                    <h2>Front End Ծրագրավորում</h2>
                    <ul>
                        <li>
                            <Link href={"#"}>
                                <Image src={dirIcon} alt={"directions-everest"}/>
                                Ավան/Ծարավաղբյուր
                            </Link>
                        </li>
                        <li>
                            <Link href={"#"}>
                                <Image src={learningIcon} alt={"learning-everest"}/>
                                Դասընթացներ
                            </Link>
                        </li>
                        <li className={"course"}>
                            <Link href={"#"}>
                                <i className="fa fa-circle" aria-hidden="true"></i>
                                <Image src={groupIcon} alt="group-everest"/>
                                Խմբային
                            </Link>
                        </li>
                        <li className={"course"}>
                            <Link href={"#"}>
                                <i className="fa fa-circle" aria-hidden="true"></i>
                                <Image src={singleIcon} alt="single-everest"/>
                                Անհատական
                            </Link>
                        </li>
                        <li className={"course"}>
                            <Link href={"#"}>
                                <i className="fa fa-circle" aria-hidden="true"></i>
                                <Image src={singleIcon} alt="offline-everest"/>
                                Offline
                            </Link>
                        </li>
                        <li className={"course"}>
                            <Link href={"#"}>
                                <i className="fa fa-circle" aria-hidden="true"></i>
                                <Image src={eIcon} alt="online-everest"/>
                                Online
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={"courses-front"}>
                <div className={"courses-front-block"}>
                    <div className={"html"}>
                        <div className={"html-title"}>
                            <Image src={html5bg} alt={"html-everest"}/>
                        </div>
                        <div className={"course-desc"}>
                            <ul>
                                <li>
                                    <i className="fa fa-calendar" aria-hidden="true"></i>&nbsp;
                                    Տևողությունը ՝ 1 ամիս
                                </li>
                                <li>
                                    <i className="fa fa-graduation-cap" aria-hidden="true"></i>&nbsp;
                                    Մասնագիտացում ՝ խորացված
                                </li>
                                {windowWidth > 768 ?
                                    (
                                        <li>
                                            <i className="fa fa-credit-card"></i> &nbsp;
                                            Արժեքը ՝ <br/> Խմբային ` 25000 դրամ
                                            Անհատական ՝ 50000 դրամ
                                        </li>
                                    )
                                    :
                                    (
                                        <li>
                                            <i className="fa fa-credit-card"></i> &nbsp;
                                            Արժեքը ՝ Խմբային ` 25000 դրամ
                                            Անհատական ՝ 50000 դրամ
                                        </li>
                                    )
                                }
                                <li></li>
                            </ul>
                        </div>
                    </div>
                    <div className={"css"}>
                        <div className={"html-title"}>
                            <Image src={css3bg} alt={"css-everest"}/>
                            <Image src={css3} alt={"css-everest"}/>
                        </div>
                        <div className={"course-desc"}>
                            <ul>
                                <li>
                                    <i className="fa fa-calendar" aria-hidden="true"></i>&nbsp;
                                    Տևողությունը ՝ 1 ամիս
                                </li>
                                <li>
                                    <i className="fa fa-graduation-cap" aria-hidden="true"></i>&nbsp;
                                    Մասնագիտացում ՝ խորացված
                                </li>
                                {windowWidth > 768 ?
                                    (

                                        <li>
                                            <i className="fa fa-credit-card"></i> &nbsp;
                                            Արժեքը ՝ <br/> Խմբային ` 25000 դրամ
                                            Անհատական ՝ 50000 դրամ
                                        </li>
                                    )
                                    :
                                    (<li>
                                        <i className="fa fa-credit-card"></i> &nbsp;
                                        Արժեքը ՝ Խմբային ` 25000 դրամ
                                        Անհատական ՝ 50000 դրամ
                                    </li>)
                                }
                                <li></li>
                            </ul>
                        </div>
                    </div>
                    <div className={"javascript"}>
                        <div className={"html-title"}>
                            <Image src={jsSvg} alt={"js-everest"}/>
                        </div>
                        <div className={"course-desc"}>
                            <ul>
                                <li>
                                    <i className="fa fa-calendar" aria-hidden="true"></i>&nbsp;
                                    Տևողությունը ՝ 2-3 ամիս
                                </li>
                                <li>
                                    <i className="fa fa-graduation-cap" aria-hidden="true"></i>&nbsp;
                                    Մասնագիտացում ՝ խորացված
                                </li>
                                {windowWidth > 768 ?
                                    (
                                        <li>
                                            <i className="fa fa-credit-card"></i> &nbsp;
                                            Արժեքը ՝ <br/> Խմբային ` 25000 դրամ
                                            Անհատական ՝ 50000 դրամ
                                        </li>
                                    )
                                    :
                                    (
                                        <li>
                                            <i className="fa fa-credit-card"></i> &nbsp;
                                            Արժեքը ՝ Խմբային ` 25000 դրամ
                                            Անհատական ՝ 50000 դրամ
                                        </li>
                                    )
                                }
                                <li></li>
                            </ul>
                        </div>
                    </div>
                    <div className={"react"}>
                        <div className={"html-title"}>
                            <Image src={reactSvg} alt={"react-everest"}/>
                        </div>
                        <div className={"course-desc"}>
                            <ul>
                                <li>
                                    <i className="fa fa-calendar" aria-hidden="true"></i>&nbsp;
                                    Տևողությունը ՝ 2 ամիս
                                </li>
                                <li>
                                    <i className="fa fa-graduation-cap" aria-hidden="true"></i>&nbsp;
                                    Մասնագիտացում ՝ խորացված
                                </li>
                                {windowWidth > 768 ?
                                    (
                                        <li>
                                            <i className="fa fa-credit-card"></i> &nbsp;
                                            Արժեքը ՝ <br/> Խմբային ` 35000 դրամ
                                            Անհատական ՝ 60000 դրամ
                                        </li>
                                    )
                                    :
                                    (
                                        <li>
                                            <i className="fa fa-credit-card"></i> &nbsp;
                                            Արժեքը ՝ Խմբային ` 35000 դրամ
                                            Անհատական ՝ 60000 դրամ
                                        </li>
                                    )
                                }
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}