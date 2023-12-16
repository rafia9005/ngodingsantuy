import { useTheme } from "next-themes";
import {
  PaperAirplaneIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export const DarkModeComponent = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <motion.div whileTap={{ rotate: 25 }}>
        <MoonIcon className="h-6 w-6" onClick={() => setTheme("dark")} />
      </motion.div>
    </div>
  );
};
