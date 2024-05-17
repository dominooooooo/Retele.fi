"use client";

import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { IoPricetagOutline } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import TakeContact from "@/components/TakeContact";
import { IoLocationOutline } from "react-icons/io5";
import { BsMailbox } from "react-icons/bs";

export default function Korjauta() {
  const [isTakeContactOpen, setIsTakeContactOpen] = useState(false);

  const openTakeContact = () => {
    setIsTakeContactOpen(true);
  };
  const closeTakeContact = () => {
    setIsTakeContactOpen(false);
  };

  return (
    <>
      <div className="text-center mt-12">
        <p className="font-black text-2xl">HUOLLA PUHELIMESI</p>
        <div className="mx-auto mt-2 max-w-screen-lg flex justify-center">
          <div className="w-full lg:w-2/3 mx-2">
            <li className="px-1 flex text-left items-center">
              <IoLocationOutline className="w-14 h-14 sm:w-7 sm:h-7 mr-3 lg:mr-3" />
              <span>
                Suoritamme kaikki huollot Porissa. Puhelimen tuonti tai haku Porin alueella onnistuu.
              </span>
            </li>
            <li className="px-2 flex text-left items-center mt-1 lg:mt-2">
              <BsMailbox className="w-6 h-6 mr-3 lg:mr-3" />
              <span>Puhelimen voi myös postittaa.</span>
            </li>
          </div>
        </div>
        <div className="mt-10 lg:mx-96">
          <p className="text-center">
            Kysy huollosta painamalla alla olevaa "HUOLLA PUHELIMESI"
            -painiketta ja ota yhteyttä.{" "}
            <b>
              Vastaamme kaikkiin yhteydenottoihin klo 12-22 välillä tunnin
              kuluessa ja saat tarkan hinnan yhteydenotossasi!
            </b>
          </p>
        </div>
        <div className="flex justify-center mt-5">
          <div className="box-content h-auto lg:w-1/2 w-full mx-2 border-2 border-black border-dashed rounded-2xl relative">
            <div className="absolute -top-5 left-2 transform -translate-x-1/2 bg-white">
              <IoPricetagOutline className="w-9 h-9 text-[#37AB07]" />
            </div>
            <p className="text-xl font-bold text-center mt-4">HUOLLOT</p>
            <p className="text-base mx-2 lg:mx-7 mt-3">
              Osien hinta riippuu mallista ja onko osa alkuperäinen vai ei. Työn
              osuus on <b>30-50€</b> riippuen korjauksesta. Tarjontaamme on
              tulossa lisää korjausvaihtoehtoja! Jos tarvittava korjauksesi ei
              näy alla, ota silti yhteyttä. Muukin korjaus saattaa onnistua!
            </p>
            <div className="flex justify-center mt-3 mb-6">
              <table className="table-auto w-full lg:w-1/2">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-center">Osa, iPhone</th>
                    <th className="px-4 py-2 text-center">Hinta</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-2">Näyttö</td>
                    <td className="px-4 py-2">20-450€</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2">Akku</td>
                    <td className="px-4 py-2">10-30€</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2">Alakaiutin</td>
                    <td className="px-4 py-2">10-25€</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-2">Latausliitin</td>
                    <td className="px-4 py-2">20-50€</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Takakamera</td>
                    <td className="px-4 py-2">15-80€</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-7">
          <div className="box-content lg:w-1/2 w-full mx-2 border-2 border-black border-dashed rounded-2xl relative">
            <div className="absolute -top-5 left-2 transform -translate-x-1/2 bg-white">
              <FiPlus className="w-10 h-10 text-[#37AB07]" />
            </div>
            <p className="text-xl mt-4 font-bold">LISÄPALVELUT</p>
            <div className="flex justify-between mt-3 mb-6">
              <div className="flex flex-col w-1/2">
                <div className="pl-4">
                  <p className="text-lg font-semibold">
                    Puhelimen käyttöönotto - 30€
                  </p>
                  <p className="text-base text-wrap mx-auto mt-3">
                    Laitamme puhelimesi käyttövalmiuteen ja siirrämme tiedot
                    vanhasta puhelimesta. Kesto n. 30min.
                  </p>
                </div>
              </div>
              <div className="w-1/2 pr-4">
                <p className="text-lg font-semibold">
                  Latausportin puhdistus - 5€
                </p>
                <p className="text-base text-wrap mx-auto mt-3">
                  Puhdistamme latausporttisi turvallisilla työkaluilla, ettei
                  latausportti vahingoitu.
                </p>
              </div>
            </div>
          </div>
        </div>
        <CustomButton
          title={"HUOLLA PUHELIMESI"}
          otherStyles={"mt-10 mb-14"}
          onPress={openTakeContact}
        />
      </div>
      {isTakeContactOpen && (
        <TakeContact
          isOpen={isTakeContactOpen}
          onClose={closeTakeContact}
          title={"HUOLLA PUHELIMESI"}
        />
      )}
    </>
  );
}
