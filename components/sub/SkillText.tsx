'use client';

import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight } from '@/utils/motion';

export const SkillIntro = () => (
  <motion.div
    variants={slideInFromLeft(0.5)}
    className="text-[40px] text-white font-medium mt-[10px] text-center mb-[15px]"
  >
    From Self-Learning to Automating at Scale — Since 2021.
  </motion.div>
);

export const AutomationStackText = () => (
  <motion.div
    variants={slideInFromRight(0.5)}
    className="text-[30px] text-gray-200 mb-10 mt-[10px] text-center"
  >
    Automation Tech Stack
  </motion.div>
);

export const FullstackStackText = () => (
  <motion.div
    variants={slideInFromRight(0.5)}
    className="text-[30px] text-gray-200 mb-10 mt-[10px] text-center"
  >
    Fullstack Development Tech Stack
  </motion.div>
);

export const DevToolsText = () => (
  <motion.div
    variants={slideInFromRight(0.5)}
    className="text-[30px] text-gray-200 mb-10 mt-[10px] text-center"
  >
    Dev Tools
  </motion.div>
);