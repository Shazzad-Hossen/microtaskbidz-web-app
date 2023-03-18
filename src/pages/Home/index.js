import React from "react";
import ButtonBlack from "../../components/Button/ButtonBlack/ButtonBlack";
import ButtonPrimary from "../../components/Button/ButtonPrimary/ButtonPrimary";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faStar,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import pCommunication from "../../images/pasificcommunication.png";
import client1 from "../../images/client1.svg";
import client2 from "../../images/client2.svg";
import client3 from "../../images/client3.svg";
import client4 from "../../images/client4.svg";

const Home = () => {
  return (
    <div>
      <Header isShow={false}></Header>
      <main>
        {/* Awesome Clients */}
        <div className="bg-[#333333] py-[66px]">
          <div className="mx-auto max-w-[1248px]">
            <div className="flex   justify-between">
              <div className="">
                <p className="font-semibold text-white ">Client Reviews</p>
                <br />
                <p className="text-[36px] font-bold leading-9 text-white">
                  Awesome Clients <br /> Satisfaction to <br /> about us
                </p>
              </div>
              <div className="ml-[25px] h-[90px] bg-[#272727] p-4">
                <FontAwesomeIcon
                  className="text-[60px] text-[#028090]"
                  icon={faQuoteLeft}
                />
              </div>

              <div className="max-w-[610px]  bg-[#028090] p-[73px]">
                <FontAwesomeIcon
                  className="mr-3 text-[#FFC600]"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="mr-3 text-[#FFC600]"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="mr-3 text-[#FFC600]"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="mr-3 text-[#FFC600]"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="mr-3 text-[#FFFFFF]"
                  icon={faStar}
                />
                <p className="mt-[18px] mb-[44px] text-white">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage
                </p>
                <h3 className="text-xl font-semibold text-white">
                  Thomas Jackson
                </h3>
                <h3 className="mb-[53px]  text-lg text-white">Condominium</h3>

                <div className="flex items-end justify-between">
                  <img src={pCommunication} alt="" />
                  <div className="">
                    <button>
                      <FontAwesomeIcon
                        className="mr-3 bg-white p-4 text-2xl text-[#333333]"
                        icon={faChevronLeft}
                      />
                    </button>
                    <button>
                      <FontAwesomeIcon
                        className="mr-3 bg-[#333333] p-4 text-2xl text-[#FFFFFF]"
                        icon={faChevronRight}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className=" mt-[66px] flex  justify-between">
              <div className="flex h-[160px] w-[290px] items-center justify-center bg-[#272727]">
                <img src={client1} alt="" />
              </div>
              <div className="flex h-[160px] w-[290px] items-center justify-center bg-[#272727]">
                <img src={client2} alt="" />
              </div>

              <div className="flex h-[160px] w-[290px] items-center justify-center bg-[#272727]">
                <img src={client3} alt="" />
              </div>

              <div className="flex h-[160px] w-[290px] items-center justify-center bg-[#272727]">
                <img src={client4} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Our Articles */}
        <div className="mx-auto mt-[100px] flex max-w-[1248px] flex-col items-start justify-between  md:flex-row">
          <div className="bg-article-1 flex h-[391px] flex-col justify-end bg-article1 p-6 text-2xl font-bold text-white">
            <p>
              THE IMAGINE INTERIORS <br /> GUIDE TO INTERIOR DESIGN{" "}
            </p>{" "}
            <br />
            <ButtonBlack text="READ MORE"></ButtonBlack>
          </div>

          <div className="">
            <p className=" mb-5 text-lg font-semibold text-[#333333]">
              We Express our experices to Rain Design <br /> Lover. You also
              invited
            </p>

            <h1 className="mb-8 text-4xl font-bold text-[#333333]">
              Our Articles
            </h1>

            <div className="bg-article-2 flex h-[391px] flex-col justify-end bg-article2 p-6 text-2xl font-bold text-[#333333] ">
              <p>
                THE IMAGINE INTERIORS <br /> GUIDE TO INTERIOR DESIGN{" "}
              </p>{" "}
              <br />
              <div className="">
                {" "}
                <ButtonPrimary text="READ MORE"></ButtonPrimary>
              </div>
            </div>
          </div>

          <div className="bg-article-3 flex h-[391px] flex-col justify-end bg-article3 p-6 text-2xl font-bold text-white ">
            <p>
              THE IMAGINE INTERIORS <br /> GUIDE TO INTERIOR DESIGN{" "}
            </p>{" "}
            <br />
            <ButtonBlack text="READ MORE"></ButtonBlack>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Home;
