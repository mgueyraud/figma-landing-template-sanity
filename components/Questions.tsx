"use client";
import { Accordion } from "@base-ui-components/react/accordion";
import ChevronDown from "./icons/ChevronDown";
import { Question as QuestionT } from "@/types/faqPage";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

function Questions({ questions }: { questions: QuestionT[] }) {
  const [value, setValue] = useState<Array<number>>([]);

  return (
    <Accordion.Root
      onValueChange={(val) => {
        setValue(val);
      }}
    >
      {questions.map((question, i) => (
        <Accordion.Item
          key={question._key}
          className="border-b-2 border-[#FFF5DA] border-dashed"
        >
          <Accordion.Header>
            <Accordion.Trigger className="font-light text-2xl flex justify-between items-center py-9 w-full group">
              <p className="text-left">{question.questionText}</p>
              <ChevronDown className="group-data-[panel-open]:rotate-180 transition duration-[400ms]" />
            </Accordion.Trigger>
          </Accordion.Header>
          <div className="overflow-hidden">
            <AnimatePresence>
              {value.includes(i) ? (
                <Accordion.Panel
                  keepMounted
                  render={(props) => (
                    <motion.div
                      initial={{ height: 0, opacity: 0, y: 20 }}
                      animate={{ height: "auto", opacity: 1, y: 0 }}
                      exit={{ height: 0, opacity: 0, y: 20 }}
                      transition={{ duration: 0.4 }}
                    >
                      <p
                        className="pb-5"
                        {...props}
                        //To maintain the answer visible
                        style={{ display: "block" }}
                      >
                        {question.answerText}
                      </p>
                    </motion.div>
                  )}
                />
              ) : null}
            </AnimatePresence>
          </div>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}

export default Questions;
