import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';

const TitleVariants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
  },
};

const IframeVariants = {
  offscreen: {
    opacity: 0,
    x: -10,
  },
  onscreen: {
    opacity: 1,
    x: 0,
  },
};

export const LocationMap = () => {
  const { t } = useTranslation();
  return (
    <>
      <motion.h3
        initial="offscreen"
        whileInView="onscreen"
        variants={TitleVariants}
        transition={{
          duration: 1,
          delay: 0.2,
        }}
        className="font-bold text-2xl text-primary-700 dark:text-primary-500"
      >
        {t('contact:visitUs')}
      </motion.h3>
      <motion.hr
        initial="offscreen"
        whileInView="onscreen"
        variants={TitleVariants}
        transition={{
          duration: 1,
          delay: 0.2,
        }}
        className="my-5 border-content/20"
      />
      <motion.iframe
        initial="offscreen"
        whileInView="onscreen"
        variants={IframeVariants}
        transition={{
          duration: 1,
          delay: 0.2,
        }}
        title={t('contact:handyBillLocation')}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126916.74073835151!2d-75.65125228181371!3d6.244198821295224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428dfb80fad05%3A0x42137cfcc7b53b56!2sMedell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses-419!2sco!4v1671857956310!5m2!1ses-419!2sco"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-72 rounded-md shadow-md shadow-primary-700 filter"
      />
    </>
  );
};
