import { Button, Card } from "@nextui-org/react";
import type { MetaFunction } from "@remix-run/node";
import { useFetcher, useSubmit } from "@remix-run/react";
import { useState } from "react";
import { FlipWords } from "~/components/flip-words";
import { motion } from "framer-motion";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  // const submit = useFetcher();

  // const [toggleTheme, setToggleTheme] = useState<boolean>(true);

  // const handleToggleTheme = () => {
  //   setToggleTheme((prev) => !prev);
  //   submit.submit({ themeValue: toggleTheme }, { action: "/", method: "POST" });
  // };
  const words = ["cute", "beautiful", "modern"];
  return (
    // <Card>
    //   <Button onClick={handleToggleTheme}>Toggle theme</Button>
    // </Card>
    <>
      <div className=" flex justify-center items-center px-4">
        <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          Welcome to our store. Make
          <div className="inline-flex">
            <FlipWords words={words} />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
              layout
            >
              style
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
}
