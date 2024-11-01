"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLinkStore } from "@/store/useLinkStore";

type Tab = {
    title: string;
    value: string;
};

export const Tabs = ({
    tabs: propTabs,
    containerClassName,
    activeTabClassName,
    tabClassName,
    contentClassName,
}: {
    tabs: Tab[];
    containerClassName?: string;
    activeTabClassName?: string;
    contentClassName?: string;
    tabClassName?: string;
}) => {
    const state = useLinkStore();
    
    useEffect(() => {
      const linkIdx = propTabs.findIndex((tab) => tab.value === state.link.value);
      if (linkIdx === -1) {
        state.setLink(propTabs[0]);
      }
      else{
        moveSelectedTabToTop(linkIdx);
      }
    }, [state.link]);

    const moveSelectedTabToTop = (idx: number) => {
        const newTabs = [...propTabs];
        const selectedTab = newTabs.splice(idx, 1);
        newTabs.unshift(selectedTab[0]);
        state.setLink(newTabs[0]);
  
    };

    return (
        <>
            <div className={cn(containerClassName)}>
                {propTabs.map((tab, idx) => (
                    <button
                        key={tab.title}
                        onClick={() => {
                            moveSelectedTabToTop(idx);
                        }}
                        className={cn("nav-item", tabClassName)}
                        style={{
                            transformStyle: "preserve-3d",
                        }}
                    >
                        {state.link.value === tab.value && (
                            <motion.div
                                layoutId="clickedbutton"
                                transition={{
                                    type: "spring",
                                    bounce: 0.3,
                                    duration: 0.6,
                                }}
                                className={cn(
                                    "absolute inset-0 bg-gray-200 dark:bg-white  rounded-full ",
                                    activeTabClassName
                                )}
                            />
                        )}

                        <span
                            className={cn(
                                "relative block text-black dark:text-white",
                                state.link.value == tab.value &&
                                    "dark:text-gray-900 dark:hover:bg-white/70 dark:hover:text-gray-900"
                            )}
                        >
                            {tab.title}
                        </span>
                    </button>
                ))}
            </div>
        </>
    );
};
