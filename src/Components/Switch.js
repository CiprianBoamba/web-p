import React, { useState } from 'react';
import { Switch } from '@headlessui/react';
import useDarkMode from '../Hooks/useDarkMode';

const MyToggle = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const [darkMode, setDarkMode] = useState(colorTheme === 'light');

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkMode(checked);
  };

  return (
    <Switch
      checked={darkMode}
      onChange={toggleDarkMode}
      className={`${
        darkMode ? 'bg-emerald-700' : 'bg-gray-400'
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          darkMode ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  );
};

export default MyToggle;
