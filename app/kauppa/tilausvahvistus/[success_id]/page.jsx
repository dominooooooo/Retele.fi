"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Return() {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState("");
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("buy_id");
  const router = useRouter();

  useEffect(() => {
    console.log("Session ID from URL:", searchParams); // Add this line
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
      <div id="success">
        <p>
          We appreciate your business! A confirmation email will be sent to{" "}
          {customerEmail}. If you have any questions, please email{" "}
          <a href="mailto:orders@example.com">orders@example.com</a>.
        </p>
      </div>
    );
  }

  return <div>Loading...</div>;
}
