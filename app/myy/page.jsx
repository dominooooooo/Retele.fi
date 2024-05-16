"use client"

import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { FaInfo } from "react-icons/fa6";
import TakeContact from "@/components/TakeContact";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";

export default function Myy() {
  const [isTakeContactOpen, setIsTakeContactOpen] = useState(false);

  const openTakeContact= () => {
    setIsTakeContactOpen(true);
  };
  const closeTakeContact = () => {
    setIsTakeContactOpen(false);
  };

  return (
    <>
      <div className="text-center mt-12">
        <p className="font-black text-2xl">MYY PUHELIMESI</p>
        <div className="mx-auto mt-2 max-w-screen-lg flex justify-center">
          <div className="w-full lg:w-2/3 mx-2">
            <li className="px-1 flex text-left items-center">
              <IoPhonePortraitOutline className="w-8 h-8 sm:w-7 sm:h-7 mr-3" />
              <span>
                Ostamme tällä hetkellä vain <b>iPhone -puhelimia</b>.
              </span>
            </li>
            <li className="px-3 lg:px-2 flex text-left items-center mt-1 lg:mt-2">
              <FaCheck className="w-7 h-7 sm:w-6 sm:h-6 mr-3 lg:mr-3" />
              <span>Tarkistamme kaikkien puhelimien toimivuuden ennen ostoa. </span>
            </li>
          </div>
        </div>
        <div className="mt-10 lg:mx-96">
          <p className="text-center">
            Kysy myynnistä painamalla
            alla painiketta "MYY PUHELIMESI" ja ota yhteyttä.{" "}
            <b>
              Vastaamme kaikkiin yhteydenottoihin 
              klo 12-22 välillä tunnin kuluessa ja saat hinnan, jonka voimme puhelimestasi maksaa!
            </b>
          </p>
        </div>
        <div className="flex justify-center mt-5">
          <div className="box-content h-auto lg:w-1/2 w-full mx-2 border-2 border-black border-dashed rounded-2xl relative">
            <div className="absolute -top-5 left-2 transform -translate-x-1/2 bg-white">
              <FaInfo className="w-9 h-9 text-[#37AB07]" />
            </div>
            <p className="text-xl font-bold text-center mt-4">
              LISÄÄ YHTEYDENOTTOON
            </p>
            <p className="text-base mx-2 lg:mx-7">
              Helpottaaksesi meidän työtä, ilmoita seuraavat asiat valmiiksi
              yhteydenottoosi.
            </p>
            <div className="flex justify-center mt-5 mb-6">
              <div className="w-full lg:w-2/3">
                <ul className="list-none">
                  <li className="px-4 flex text-left flex-col lg:flex-row justify-between">
                    <span>- akun kunto</span>
                  <div className="text-sm">
                    <span>asetukset</span>
                    <span className="font-bold text-gray-600 mx-1">-&gt;</span>
                    <span>akku</span>
                    <span className="font-bold text-gray-600 mx-1">-&gt;</span>
                    <span>akun kunto lataus</span>
                    <span className="font-bold text-gray-600 mx-1">-&gt;</span>
                    <span>maksimikapasiteetti (x%)</span>
                  </div>
                  </li>
                  <li className="px-4 flex flex-col lg:flex-row justify-between text-left mt-4 lg:mt-0">
                    <span>- muistikapasiteetti</span>
                    <div className="text-sm">
                      <span>asetukset</span>
                      <span className="font-bold text-gray-600 mx-1">-&gt;</span>
                      <span>yleinen</span>
                      <span className="font-bold text-gray-600 mx-1">-&gt;</span>
                      <span>tiedot</span>
                      <span className="font-bold text-gray-600 mx-1">-&gt;</span>
                      <span>muistikapasiteetti (xGB)</span>
                    </div>
                  </li>
                  <li className="px-4 flex flex-col lg:flex-row justify-between text-left mt-4 lg:mt-0">
                    <span>- ulkoinen kunto</span>
                    <span className="text-sm">liitä kuvat edestä, takaa ja sivuilta</span>
                  </li>
                  <li className="px-4 flex flex-col lg:flex-row justify-between text-left mt-4 lg:mt-0">
                    <span>- toimivuus</span>
                    <span className="text-sm">toimiiko kaikki kuten pitää? jos ei, mikä ei toimi ja miten?</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <CustomButton title={"MYY PUHELIMESI"} otherStyles={"mt-10 lg:mb-0 mb-14"} onPress={openTakeContact} />
      </div>
      {isTakeContactOpen && (
        <TakeContact
          isOpen={isTakeContactOpen}
          onClose={closeTakeContact}
          title={"MYY PUHELIMESI"}
        />
      )}
    </>
  );
}
