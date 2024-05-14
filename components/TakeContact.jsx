import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import { Link } from "@nextui-org/react";

export default function TakeContact({ isOpen, onClose, title }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            {title} - OTA YHTEYTTÄ
          </ModalHeader>
          <ModalBody>
            <b>
              Vastaamme jokaiseen yhteydenottoon tunnissa klo 12-22 välillä!
            </b>
            <p>
              Ota yhteyttä,
            </p>
            <div className="flex flex-col">
              <p>viestillä: <span>045 171 0668</span>,</p>
              <p>Instagramissa: <Link isExternal href="https://instagram.com/retelephones">@retelephones</Link> tai</p>
              <p>sähköpostilla: <Link isExternal href="mailto:tuki@retele.fi">tuki@retele.fi</Link></p>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
