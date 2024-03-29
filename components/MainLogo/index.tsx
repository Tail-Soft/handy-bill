import { motion } from 'framer-motion';
import { FC } from 'react';

import { useMainLogo } from './useMainLogo';

interface Props {
  isInViewPort: boolean;
}

export const MainLogo: FC<Props> = ({ isInViewPort }) => {
  const { rotation } = useMainLogo(isInViewPort);

  return (
    <>
      <motion.div
        data-testid="main-container"
        initial={{ scale: 0.85, rotateZ: 0 }}
        animate={{ scale: 1, rotateZ: rotation }}
        drag
        dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
        dragSnapToOrigin
        dragElastic={0.5}
        dragTransition={{ bounceStiffness: 150, bounceDamping: 40 }}
        transition={{ duration: 3, type: 'spring' }}
        className="flex border mt-5 md:mt-0 border-foreground bg-background relative md:w-96 md:h-96 w-80 h-80 shadow-2xl shadow-primary/40 drop-shadow-xl rounded-full hover:cursor-grab hover:active:cursor-grabbing"
      >
        <motion.div
          initial={{ rotate: -45 }}
          animate={{ rotate: -45 }}
          className="main-rectangle w-16 h-16 md:w-20 md:h-20 top-0 bottom-0 left-0 right-0 m-auto"
        />
        <motion.div
          initial={{ y: 0, rotate: -45 }}
          animate={{ y: -10, rotate: -45 }}
          transition={{
            delay: 3,
            duration: 5,
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 0.5,
          }}
          className="dark-rentangle-1 w-16 h-16 md:w-20 md:h-20 md:bottom-28 md:right-28 bottom-24 right-24 top-0 left-0 m-auto"
        />
        <motion.div
          initial={{ x: 0, rotate: -45 }}
          animate={{ x: -10, rotate: -45 }}
          transition={{
            delay: 0,
            duration: 5,
            repeatType: 'reverse',
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
          className="dark-rentangle-2 w-16 h-16 md:w-20 md:h-20 md:right-56 top-0 bottom-0 left-0 right-48 m-auto"
        />
        <motion.div
          initial={{ y: 0, rotate: -45 }}
          animate={{ y: 10, rotate: -45 }}
          transition={{
            delay: 1.5,
            duration: 5,
            repeatType: 'reverse',
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
          className="dark-rentangle-3 w-16 h-16 md:w-20 md:h-20 md:top-28 md:right-28 top-24 right-24 bottom-0 left-0  m-auto"
        />
        <motion.div
          initial={{ y: 0, rotate: 135 }}
          animate={{ y: -10, rotate: 135 }}
          transition={{
            delay: 1.5,
            duration: 5,
            repeatType: 'reverse',
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
          className="light-rentangle-1 w-16 h-16 md:w-20 md:h-20 md:bottom-28 md:left-28 bottom-24 left-24 top-0 right-0 m-auto"
        />
        <motion.div
          initial={{ x: 0, rotate: -45 }}
          animate={{ x: 10, rotate: -45 }}
          transition={{
            delay: 0,
            duration: 5,
            repeatType: 'reverse',
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
          className="light-rentangle-2 w-16 h-16 md:w-20 md:h-20 md:left-56 top-0 bottom-0 left-48 right-0 m-auto"
        />
        <motion.div
          initial={{ y: 0, rotate: 135 }}
          animate={{ y: 10, rotate: 135 }}
          transition={{
            delay: 3,
            duration: 5,
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 0.5,
          }}
          className="light-rentangle-3 w-16 h-16 md:w-20 md:h-20 md:top-28 md:left-28 top-24 left-24 bottom-0 right-0 m-auto"
        />
      </motion.div>
    </>
  );
};
