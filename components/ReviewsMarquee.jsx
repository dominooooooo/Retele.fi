import React from "react";
import Marquee from "react-fast-marquee";
import { FaStar } from "react-icons/fa";

const ReviewsMarquee = () => {
  const reviews = [
    {
      name: "Teri Vuorisalo",
      description:
        "Kaupat sujui hyvin ja ongelmitta. Tuotteessa ei ole ollut moitittavaa ja tuote oli juuri siinä kunnossa missä myyjä sen kertoi olevan. Kokemukseni perusteella voin suositella!",
      title: "Sujuva kaupankäynti",
      stars: 5,
      date: "27. syyskuuta 2023",
    },
    {
      name: "Niilo Multisilta",
      title: "Nopea laadukas ja halpa!",
      stars: 5,
      date: "07. maaliskuuta 2024",
    },
    {
      name: "Lotta",
      description: "Akku toimii paljon paremmin ja kestää pidempään. :))",
      title: "Suosittelen",
      stars: 5,
      date: "24. helmikuuta 2024",
    },
    {
      name: "Consumer",
      description: "Homma sujui sovitusti ja erittäin edullisesti",
      title: "Homma sujui sovitusti ja erittäin…",
      stars: 5,
      date: "08. maaliskuuta 2024",
    },
    {
      name: "Marjo Nurmi",
      description: "Hyvä, nopea ja asiallinen palvelu. Suosittelen!",
      title: "Hyvä",
      stars: 5,
      date: "24. lokakuuta 2023",
    },
  ];

  return (
    <div className="flex justify-center items-center">
      <div className="w-full lg:w-2/3">

      <Marquee speed={40}>
        <div className="flex">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 lg:w-72 lg:m-4 lg:p-6 w-48 m-2 p-5 bg-white rounded-lg shadow-md border-1"
            >
              <p className="text-lg font-semibold">{review.name}</p>
              <p className="text-sm text-gray-700 mb-4">{review.description}</p>
              <p className="text-lg font-semibold">{review.title}</p>
              <div className="flex items-center mb-2">
                {[...Array(review.stars)].map((_, i) => (
                  <FaStar key={i} color="#ffc107" className="mr-1" />
                ))}
                {[...Array(5 - review.stars)].map((_, i) => (
                  <FaStar
                    key={i + review.stars}
                    color="#ced4da"
                    className="mr-1"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-500">{review.date}</p>
            </div>
          ))}
        </div>
      </Marquee>
              
      </div>
    </div>
  );
};

export default ReviewsMarquee;
