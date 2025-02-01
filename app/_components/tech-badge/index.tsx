/* eslint-disable prettier/prettier */
"use client"

import { motion } from "framer-motion";
import { ComponentProps } from "react";


type TechBadgeProps = ComponentProps<typeof motion.span> & {
    name: string
}

const TechBadge = ({name, ...props}: TechBadgeProps) => {
    return ( 
        <motion.span 
            className="text-primary bg-primary/50 rounded-lg px-3
            py-1 font-mono"
            {...props}
            >
            {name}
        </motion.span>
     );
}
 
export default TechBadge;