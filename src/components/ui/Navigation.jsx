import Button from "./Button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Navigation({ onPrev, onNext, disabledPrev, disableNext }) {
  return (
    <motion.div 
      className="flex gap-4 mt-8 z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <Button 
        onClick={onPrev} 
        disabled={disabledPrev} 
        className="bg-red-500 hover:bg-red-600 text-white backdrop-blur-sm"
      >
        <ArrowLeft size={20} />
      </Button>

      <Button 
        onClick={onNext} 
        disabled={disableNext} 
        className="bg-green-500 hover:bg-green-600 text-white backdrop-blur-sm"
      >
        <ArrowRight size={20} />
      </Button>
    </motion.div>
  );
}
