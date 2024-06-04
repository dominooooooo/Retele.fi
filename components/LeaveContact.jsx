import { useState, useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Input,
  Button,
} from "@nextui-org/react";

export default function LeaceContact({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [contact, setContact] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    setIsSubmitDisabled(!name || !text || !contact);
  }, [name, text, contact]);

  const handleSubmit = async () => {
    if (isSubmitDisabled) return;

    const payload = {
      content: `**Nimesi:** ${name}\n**Aihe:** ${text}\n**Yhteystietosi:** ${contact}`,
    };

    try {
      const response = await fetch("https://discord.com/api/webhooks/1247569291000418356/8PeDgT0vq92dbYsGbumqeZZzWG7M6VMY51BQFsZGsbelMKZ9TbtL76bC7zhydG9ha8h3", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSuccessMessage("Kiitos yhteydenotostasi!");
        // Clear the form
        setName("");
        setText("");
        setContact("");

        // Hide the success message after 5 seconds
        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
      } else {
        setSuccessMessage("Virhe lähettäessä tietoja. Yritä uudelleen.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSuccessMessage("Virhe lähettäessä tietoja. Yritä uudelleen.");
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">KYSY LISÄÄ</ModalHeader>
          <ModalBody>
            <b>Vastaamme jokaiseen yhteydenottoon saman päivän aikana!</b>
            <div className="flex flex-col justify-center items-center mt-3 space-y-2">
              <Input
                type="text"
                label="Nimesi"
                isRequired
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="text"
                label="Aihe"
                isRequired
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <Input
                type="text"
                description="*sähköposti, puhelinnumero tai Instagram-nimesi"
                label="Yhteystietosi"
                isRequired
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
              <Button onPress={handleSubmit} isDisabled={isSubmitDisabled}>
                Lähetä
              </Button>
              {successMessage && (
                <p className="mt-2 text-green-500">{successMessage}</p>
              )}
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
