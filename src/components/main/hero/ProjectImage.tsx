import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export const ProjectImage = ({
  image,
  title,
  text,
}: {
  image: string;
  title: string;
  text: string;
}) => {
  return (
    <div className="tab:sticky tab:top-24 prepc:top-28 tab:block prepc:aspect-[326/380] hidden aspect-[326/242] h-fit w-[38vw]">
      <AnimatePresence mode="wait">
        <motion.div
          key={title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="prepc:aspect-[326/380] relative aspect-[326/242] w-full overflow-hidden"
        >
          <div className="relative mx-auto mb-4 aspect-326/242 h-auto w-full max-w-111">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
          <p className="prepc:block text-greyd9 mx-auto hidden max-w-111 p-2 text-base leading-[130%] backdrop-blur-md">
            {text}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
