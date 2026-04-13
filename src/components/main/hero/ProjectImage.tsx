import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export const ProjectImage = ({ image, title }: { image: string; title: string }) => {
  return (
    <div className="tab:sticky tab:top-24 tab:block hidden aspect-[326/242] h-fit w-[38vw]">
      <AnimatePresence mode="wait">
        <motion.div
          key={title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="relative aspect-[326/242] w-full overflow-hidden"
        >
          <div className="relative mx-auto mb-4 aspect-326/242 h-auto w-full max-w-111">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>{" "}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
