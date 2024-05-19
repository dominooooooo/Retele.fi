import { Divider, Link } from "@nextui-org/react";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import { FaStar, FaInstagram, FaUserTie, FaTiktok } from "react-icons/fa";
import CustomCard from "@/components/CustomCard";
import { IoDiamondOutline } from "react-icons/io5";
import ReviewsMarquee from "@/components/ReviewsMarquee";
import { GiCheckMark } from "react-icons/gi";
import Buy from "@/public/buy.png";
import Fix from "@/public/fix.png";
import Sell from "@/public/sell.png";

export default function Home() {
  return (
    <>
      <div className="mt-10">
        <p className="text-center italic text-wrap mx-4 lg:mx-96">
          "Retele on vuonna 2023 perustettu yritys, joka huoltaa, ostaa sekä
          myy puhelimia. Yrityksen perusti 16-vuotias porilainen, joka hoitaa yrityksen asioita edelleen itse. 
          Retele huoltaa, myy ja ostaa tällä hetkellä vain iPhone
          -puhelimia. Kiva, että pääsit tänne asti!"
        </p>
        <div className="flex justify-center mt-10">
          <div className="border-2 border-black border-dashed rounded-2xl p-4 relative">
            <div className="absolute -top-5 left-2 transform -translate-x-1/2 bg-white">
              <GiCheckMark className="w-10 h-10 text-[#37AB07]" />
            </div>
            <p className="text-center font-bold text-xl">
              Neljä syytä valita Retele
            </p>
            <div className="flex justify-center items-center">
              <div className="mt-7 grid grid-rows-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto">
                <div className="flex flex-col space-y-3">
                  <div className="flex flex-row items-center">
                    <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl">
                      <RiMoneyEuroCircleLine size={35} />
                    </div>
                    <p className="font-semibold ml-5">
                      Kilpailukykyiset hinnat
                    </p>
                  </div>
                  <Divider orientation="horizontal" />
                </div>
                <div className="flex flex-col space-y-3">
                  <div className="flex flex-row items-center">
                    <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl">
                      <FaStar size={29} />
                    </div>
                    <div className="flex flex-col ml-5">
                      <p className="font-semibold">
                        5-tähden asiakastyytyväisyys
                      </p>
                      <Link
                        href="https://fi.trustpilot.com/review/retele.fi"
                        size="sm"
                        isExternal
                      >
                        Lue arvostelumme
                      </Link>
                    </div>
                  </div>
                  <Divider orientation="horizontal" />
                </div>
                <div className="flex flex-col space-y-3">
                  <div className="flex flex-row items-center">
                    <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl">
                      <IoDiamondOutline size={32} />
                    </div>
                    <p className="font-semibold ml-5">Kuukauden takuu</p>
                  </div>
                  <div className="lg:hidden">
                    <Divider orientation="horizontal" />
                  </div>
                </div>
                <div className="flex flex-col space-y-3">
                  <div className="flex flex-row items-center">
                    <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl">
                      <FaUserTie size={28} />
                    </div>
                    <p className="font-semibold ml-5">Tuet nuorta yrittäjää</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row mt-10 justify-center gap-2 lg:gap-12">
          <CustomCard title={"Osta"} image={Buy} link={"/kauppa"} />
          <CustomCard title={"Huolla"} image={Fix} link={"/huolla"} />
          <CustomCard title={"Myy"} image={Sell} link={"/myy"} />
        </div>
        {/* <div className="flex w-full justify-start items-center mt-10">
          <p className="font-bold text-2xl ml-4 sm:ml-8 md:ml-16 lg:ml-96">Ajankohtaista</p>
        </div> */}
        <div className="mt-12">
          <p className="text-center font-bold text-2xl">Asiakaskokemuksia</p>
            <p className="text-center">Lue kaikki arvostelumme <Link isExternal href="https://fi.trustpilot.com/review/retele.fi" underline="always" className="cursor-pointer">täältä</Link></p>
          <div className="mt-1">
            <ReviewsMarquee />
          </div>
        </div>
        <div className="mt-12 mb-10">
          <p className="text-center font-bold text-2xl">Seuraa somessa</p>
          <div className="flex flex-row justify-center mt-5 gap-6 lg:gap-10">
            <a href="https://www.instagram.com/retelephones/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
              <FaInstagram className="text-black text-2xl" />
              <span className="text-black font-bold ml-2">@retelephones</span>
            </a>
            <a href="https://www.tiktok.com/@retelephones/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
              <FaTiktok className="text-black text-2xl" />
              <span className="text-black font-bold ml-2">@retelephones</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
