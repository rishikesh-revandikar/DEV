"use client";

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImg from "@/assets/images/grain.jpg";
import { useLinkStore } from "@/store/useLinkStore";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
export const ContactSection = () => {
    const contactRef = useRef<HTMLDivElement>(null);
    const contactInView = useInView(contactRef);
    const state = useLinkStore();
    useEffect(() => {
        if (contactInView) {
            state.setLink({
                title: "Contact",
                value: "#contact",
            });
        }
    }, [contactInView]);
    return (
        <section
            ref={contactRef}
            className="py-16 pt-12 lg:py-24 lg:pt-20"
            id="contact"
        >
            <div className="container">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-950 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
                    <div
                        className="absolute inset-0 -z-10 opacity-5"
                        style={{
                            backgroundImage: `url(${grainImg.src})`,
                        }}
                    ></div>
                    <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                        <div>
                            <h2 className="font-serif text-2xl md:text-3xl">
                                Let&apos;s create something amazing together
                            </h2>
                            <p className="text-sm md:text-base mt-2">
                                Ready to bring your next projects to life?
                                Let&apos;s connect and discuss how I can help
                                you achieve your goals.
                            </p>
                        </div>
                        <div>
                            <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-950">
                                <span className="font-semibold">
                                    Contact Me
                                </span>
                                <ArrowUpRightIcon className="size-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
