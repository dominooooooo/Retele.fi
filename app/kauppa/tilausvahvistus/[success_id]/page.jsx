"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Success from "@/public/checked.png";

export default function Return() {
  const pathname = usePathname();
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState("");
  const router = useRouter();

  const pathSegments = pathname.split("/").filter((segment) => segment);
  const sessionId = pathSegments[pathSegments.length - 1];

  console.log(sessionId);

  useEffect(() => {
    console.log("Session ID from URL:", sessionId);
    if (sessionId) {
      console.log("Fetching session details for ID:", sessionId);
      fetch(`/api/payment_intent?session_id=${sessionId}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Session data:", data);
          if (data.error) {
            console.error("Error fetching session data:", data.error);
            return;
          }

          setStatus(data.status);
          setCustomerEmail(data.customer_email);
        })
        .catch((error) => {
          console.error("Error fetching session data:", error);
        });
    }
  }, [sessionId]);

  useEffect(() => {
    if (status === "open") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "complete") {
    return (
      <div id="success" className="flex flex-col items-center justify-center text-center mt-10">
        <Image
          src={Success}
          width={90}
          height={90}
          className="lg:w-[120px] lg:h-[120px]"
          draggable="false"
          alt="ReteleLogo"
        />
        <p className="mt-7 text-lg text-wrap mx-4 lg:mx-144">
          Suuri kiitos, että valitsit meidät! Tilaus on tehty onnistuneesti ja tilauksesi lähetetään mahdollisimman pian.{" "}
          Lähetämme kuitin ja vahvistuksen vielä sinulle osoitteeseen{" "}
          {customerEmail}. Jos sinulla on kysyttävää, ole yhteydessä{" "}
          <a href="mailto:tuki@retele.fi">tuki@retele.fi</a>.
        </p>
      </div>
    );
  }
}
