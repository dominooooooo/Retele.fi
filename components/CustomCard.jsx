import { Card, CardBody, CardFooter, Link } from "@nextui-org/react";
import Image from 'next/image'

const CustomCard = ({
  title,
  image,
  otherStyles,
  link,
}) => {
  return (
  <Link href={link}>
    <Card shadow="md" isPressable className={`${otherStyles} transform transition duration-500 hover:scale-105 cursor-pointer bg-white`}>
      <CardBody>
      <Image
        src={image}
        width={90}
        height={90}
        className="lg:w-[120px] lg:h-[120px]"
        draggable="false"
        alt="ReteleLogo"
      />
      </CardBody>
      <CardFooter className="flex flex-col">
        <b className="text-lg">{title}</b>
      </CardFooter>
    </Card>
  </Link>
  );
};

export default CustomCard;
