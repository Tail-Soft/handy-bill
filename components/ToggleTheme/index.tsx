import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { match } from 'ts-pattern';

import { useThemeContext } from '../../hooks/useTheme';
import { Tooltip } from '../Tooltip';
import { MoonIcon } from './MoonIcon';
import { SunIcon } from './SunIcon';

export const ToggleTheme = () => {
  const { t } = useTranslation();
  const { setTheme, theme } = useThemeContext();
  const isDark = theme === 'dark';

  const handleToggle = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <>
      <Tooltip
        position="bottom"
        title={match(isDark)
          .with(true, () => t('common:activateLight'))
          .otherwise(() => t('common:activateDark'))}
        className={`w-14 h-9 border-2 border-primary-700 dark:border-primary-500 rounded-full bg-foreground/90 flex p-0.5 cursor-pointer`}
        onClick={handleToggle}
      >
        <motion.div
          className="w-7 h-7 rounded-full p-1 bg-primary-600 md:mr-8"
          initial={{
            x: isDark ? 20 : 0,
          }}
          animate={{
            x: isDark ? 20 : 0,
          }}
        >
          {match(theme)
            .with('dark', () => <MoonIcon />)
            .with('light', () => <SunIcon />)
            .exhaustive()}
        </motion.div>
      </Tooltip>
    </>
  );
};
