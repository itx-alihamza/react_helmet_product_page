import Carousal from "./components/Carousal";
import Picture from "./components/Picture";
import SimplePic from "./components/SimplePic";
import { DotButton } from "./components/EmblaCarouselDotButton";
import { useState } from "react";

export default function Home() {
  const [dotsData, setDotsData] = useState<{ selectedIndex: number; scrollSnaps: number[]; onDotButtonClick: (index: number) => void } | null>(null);

  // Array of background colors for each dot
  const dotColors = ['bg-white', 'bg-[#A4060D]', 'bg-[#009DC2]', 'bg-[#626262]', 'bg-purple-500', 'bg-pink-500'];


  return (
    <div className=" flex flex-col bg-[#3B3844] min-w-screen min-h-screen ">
      <section className="relative flex flex-col min-w-screen h-[80vh] sm:min-h-screen">
        <Picture
          alt="Main Pic"
          classes="w-full overflow-hidden h-[75%] sm:h-full"
          imgClasses="w-[120vw] h-[60vh] sm:h-full sm:w-full object-cover object-center"
          mobPic="./assets/firSecMob.png"
          desPic="./assets/firSecPic.png"
        />
        <div className="sm:absolute w-full sm:w-auto h-[25%] flex flex-col gap-4 justify-center items-center top-1/2 left-20 sm:left-25 md:left-30 lg:40 sm:-translate-y-1/2 z-20 text-4xl text-white">
          <div className="flex flex-col gap-4" style={
            { fontSize: 'clamp(1.7rem, 5vw, 20rem' }
          }>
            <p>
              Protection Meets
              <span className=" sm:hidden"> Intelligence</span>
            </p>
            <h1 className="hidden sm:block sm:font-extrabold">Intelligence</h1>
          </div>
          <button className="flex justify-center items-center bg-white text-black text-sm px-12 py-4 sm:py-3 sm:px-6 sm:mr-24 md:px-8 md:py-3 lg:px-12 lg:py-4 border-4 border-white hover:border-[#16B6BB] focus:border-[#16B6BB] rounded-full ">
            Order Now
          </button>
        </div>
      </section>
      <section className="flex flex-col bg-[url(./assets/sec_2_bg.png)] gap-4 lg:gap-0 pt-4 sm:py-12 sm:px-6 md:px-12 items-center min-w-screen min-h-screen overflow-x-hidden"
        style={
          { fontSize: 'clamp(1rem, 2.5vw + 1rem, 16rem' }
        }
      >
        <div className="flex flex-col justify-center items-center w-full">
          <h3 className="font-extrabold">Introduction</h3>
          <p className="text-lg"
            style={
              { fontSize: 'clamp(1rem, 2.5vw + 1rem, 16rem' }
            }
          >SMART HELMET - NOVA Series</p>
        </div>
        <div className="flex flex-col md:flex-row md:h-full justify-center items-center lg:pl-14">
          <Picture
            classes="h-[350px] md:min-w-[350px] md:h-[400px] lg:min-w-110 lg:h-130  mt-4 mb-2 md:my-2 lg:my-0 lg:mt-0 lg:mb-0"
            imgClasses="w-full h-full"
            mobPic="./assets/helmentMobi.png"
            desPic="./assets/helmentWind.png"
          />
          <div className="text-black flex flex-col gap-4 justify-center text-center md:text-left lg:pr-24">
            <p className="font-extrabold responsive-heading">Ride Smarter. Ride Safer.</p>
            <p className="px-12 font-light md:px-0 sm:text-[10px] leading-normal responsive-body"
            >Meet the Nova Series, the next evolution in motorcycle safety. Designed with cutting-edge technology and engineered for maximum protection, the Nova Series Smart Helmet isn’t just a helmet — it’s your intelligent riding companion.</p>
          </div>
        </div>
      </section>
      <section className={`flex flex-col justify-center items-center bg-[url(./assets/sec_3_bg.png)] lg:bg-[url(./assets/sec_3_bg_des.png)] bg-cover bg-center min-w-screen min-h-screen lg:min-h-[45vh] py-12 md:px-6 lg:px-0 lg:pb-24`}>
        <h1 className="font-extrabold responsive-heading text-white text-center mb-12">Features</h1>
        <div className="flex flex-col md:flex-row md:flex-wrap  gap-8 md:gap-14 lg:gap-10 justify-center items-center flex-1">
          <SimplePic className="w-60 sm:w-70  h-60 sm:h-70 " src="./assets/fea_1.png" />
          <SimplePic className="w-60 sm:w-70  h-60 sm:h-70 " src="./assets/fea_2.png" />
          <SimplePic className="w-60 sm:w-70  h-60 sm:h-70 " src="./assets/fea_3.png" />
          <SimplePic className="w-60 sm:w-70  h-60 sm:h-70 " src="./assets/fea_4.png" />
        </div>
      </section>
      <section className="flex justify-center items-center text-center bg-white max-w-screen max-h-[114px] py-14">
        <h1 className="font-extrabold w-[80%] text-[clamp(2rem,3vw+1rem,2.5rem)]/12 md:text-[clamp(2rem,3vw+1rem,2.5rem)]/14">Colors Truly Matters - And We Know It!</h1>
      </section>
      {/* Carousal */}
      <section className="min-w-screen h-[250px] sm:h-[300px] md:h-[450px] lg:h-[600px] xl:h-[700]">
        <Carousal onDotsData={setDotsData} />
      </section>
      <section className="flex flex-col justify-center items-center bg-[url(./assets/sec_5_bg.png)] text-center bg-white max-w-screen min-h-[114px] px-10 pb-14">
        {dotsData && (
          <div className="embla__dots min-w-[200px] min-h-[50px] flex gap-4 my-2 justify-center items-center">
            {dotsData.scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => dotsData.onDotButtonClick(index)}
                className={`embla__dot rounded-full w-4 h-4 ${dotColors[index % dotColors.length]} ${index === dotsData.selectedIndex ? 'embla__dot--selected ring-4 ring-gray-400 border-2 border-gray-400' : 'opacity-70'
                  } ${index === 0 ? 'border-1 border-black' : ''}`}
              />
            ))}
          </div>
        )}
        <div className="w-full">
          <h1 className="font-extrabold responsive-heading">People Are Loving It!</h1>
          <div className="w-full">
            <p className="font-light text-center responsive-body">Every day, more riders are choosingd NOVA – the Smart Helmet for its unbeatable blend of safety, technology, and style.</p>
            <p className="font-light text-center responsive-body">From delivery riders to traffic officers, NOVA is redefining what it means to ride responsibly. Whether it’s the brain-signal ignition lock or the ECE-certified impact protection, people trust NOVA to keep them safe on every ride.</p>
          </div>

          <div className="relative min-h-[250px] flex flex-col gap-2 justify-end items-center mt-30 px-6 md:px-15 lg:px-20 xl:px-40 py-8 text-white rounded-2xl bg-[url(./assets/sec_5_inbg.png)] bg-cover bg-center">
            <Picture
              classes="absolute w-[clamp(200px,3vw+30px,400px)] h-[clamp(200px,3vw+30px,400px)] left-1/2 top-0 -translate-y-1/2 -translate-x-1/2 "
              imgClasses="w-full h-full"
              mobPic="./assets/sec_5_person_mb.png"
              desPic="./assets/sec_5_person_ds.png"
            />
            <p className="responsive-body">“It’s not just a helmet — it’s a commitment to safety. I finally feel like I’m protected and connected.”</p>
            <div className="w-full flex md:justify-end justify-center">
              <p className="responsive-body font-bold">— Ali, Bikers Group Head, Lahore</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
