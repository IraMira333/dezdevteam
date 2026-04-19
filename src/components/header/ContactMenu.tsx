import { teamData } from "../assets/contacts";
import { SocialLink } from "../shared/SocialLink";

export const ContactMenu = ({
  isMenuOpened,
  setIsMenuOpened,
}: {
  isMenuOpened: boolean;
  setIsMenuOpened: (value: boolean | ((prev: boolean) => boolean)) => void;
}) => {
  const contactList = [
    { number: teamData[1].telegram, name: "telegram" },
    { number: teamData[0].whatsapp, name: "whatsapp" },
  ];

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setIsMenuOpened(false);
      }}
      className={`bg-whitef0 absolute top-18 right-6 w-47.5 transition-all duration-300 ease-in-out ${
        isMenuOpened
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-5 opacity-0"
      } `}
    >
      {contactList.map((contact, inx) => (
        <>
          <SocialLink
            key={contact.number}
            url={contact.number}
            text={contact.name}
            className={`text-black06 flex h-11 items-center justify-center py-2.5 transition hover:scale-105`}
            iconStyles="w-5.5 h-auto"
          />
          {inx !== contactList.length - 1 && <div className="bg-black0a/20 mx-auto h-px w-30" />}
        </>
      ))}
    </div>
  );
};
