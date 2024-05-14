import Marquee from "react-fast-marquee";

export default function TopMarguee() {
  return (
    <div className="flex justify-center items-center h-8 bg-yellow-400">
        <Marquee speed={30} autoFill className="font-bold">
        UUDET PÄIVITETYT NETTISIVUT!
        </Marquee>
  </div>
  )
}
