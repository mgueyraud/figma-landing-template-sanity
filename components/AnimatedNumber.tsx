"use client";
import NumberFlow from "@number-flow/react";
import React, { useRef } from "react";
import { useInView } from "motion/react";
import { motion } from "motion/react";

export default function AnimatedNumber({
  value,
  suffixText,
}: {
  value: number;
  suffixText: string;
}) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <div ref={ref} className="inline-block">
      <NumberFlow
        value={isInView ? value : 0}
        trend={0}
        transformTiming={{ duration: 1000 }}
      />
      &nbsp;
      <motion.div transition={{ duration: 1 }} layout className="inline-block">
        {suffixText}
      </motion.div>
    </div>
  );
}
