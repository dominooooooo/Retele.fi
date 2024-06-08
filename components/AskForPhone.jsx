import { useState, useEffect } from "react";
import { Input, Button, Select, SelectItem } from "@nextui-org/react";
import { phones } from "@/utils/data";

function AskForPhone() {
  const [name, setName] = useState("");
  const [selectedPhones, setSelectedPhones] = useState([]);
  const [color, setColor] = useState("");
  const [contact, setContact] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    setIsSubmitDisabled(!name || !selectedPhones.length || !contact);
  }, [name, selectedPhones, contact]);

  const handleSubmit = async () => {
    if (isSubmitDisabled) return;

    const payload = {
      content: `**Nimesi:** ${name}\n**Haluamasi malli(t):** ${selectedPhones.join(
        ", "
      )}\n**Mieluinen väri (valinnainen):** ${color || "Ei määritelty"}\n**Yhteystietosi:** ${contact}`,
    };

    try {
      const response = await fetch("https://discord.com/api/webhooks/1240007631922266165/A2EMWOa5OCarFN1vh8pGjYVKHAIyVC6KAjFiiTSOAO0qPlau2aY4sBBqhdtdD4seUYEG", {
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
        setSelectedPhones([]);
        setColor("");
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
    <div className="flex justify-center mb-12">
      <div className="flex flex-col">
        <div className="ml-5">
          <p className="font-bold text-xl">Tietty iPhone-malli etsinnässä?</p>
          <p>
            Jätä yhteystietosi alas, niin otamme sinuun yhteyttä kun haluamasi
            malli on saatavilla.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mt-3 space-y-2">
          <Input
            className="max-w-xs sm:max-w-lg"
            type="text"
            label="Nimesi"
            isRequired
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Select
            label="Haluamasi malli(t)"
            className="max-w-xs sm:max-w-lg"
            items={phones}
            isRequired
            selectionMode="multiple"
            onSelectionChange={(selected) => setSelectedPhones([...selected])}
          >
            {phones.map((phone) => (
              <SelectItem key={phone.value} value={phone.value}>
                {phone.label}
              </SelectItem>
            ))}
          </Select>
          <Input
            className="max-w-xs sm:max-w-lg"
            type="text"
            label="Mieluinen väri (valinnainen)"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <Input
            className="max-w-xs sm:max-w-lg"
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
      </div>
    </div>
  );
}

export default AskForPhone;