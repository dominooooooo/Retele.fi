import { Link, Divider } from "@nextui-org/react";

export default function Footer() {
  const current_year = new Date().getFullYear();

  return (
    <>
      <Divider orientation="horizontal" />
      <div className="mt-auto bg-[#f0f0f0]">
        <div className="container mx-auto px-4 sm:px-10 lg:px-72 mt-6 flex flex-wrap justify-between items-center">
          <div className="w-full lg:w-auto text-center mb-6 lg:mb-0">
            <p className="font-black text-xl mb-2">YRITYSTIEDOT</p>
            <p className="font-medium text-md">Yrityksen nimi: Retele</p>
            <p className="font-medium text-md">Y-tunnus: 3390989-4</p>
            <p className="font-medium text-md">Sähköposti: tuki@retele.fi</p>
          </div>
          <div className="w-full lg:w-auto text-center flex flex-col items-center">
            <p className="font-black text-xl mb-2">LINKKEJÄ</p>
            <Link
              color="foreground"
              showAnchorIcon
              underline="always"
              href="/maksutavatjatoimitus"
            >
              Maksutavat ja toimitus
            </Link>
            <Link
              color="foreground"
              showAnchorIcon
              underline="always"
              href="/palautusjatakuu"
            >
              Palautusoikeus ja takuu
            </Link>
          </div>
        </div>
        <p className="text-center mt-10">© {current_year} RETELE</p>
      </div>
    </>
  );
}
