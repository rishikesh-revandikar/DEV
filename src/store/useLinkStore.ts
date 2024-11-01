import { create } from "zustand";

type LinkStore = {
    link: { title: string; value: string };
    setLink: (link: {title: string; value: string}) => void;
};

export const useLinkStore = create<LinkStore>((set) => ({
    link: {
        title: "Home",
        value: "#hero",
    },
    setLink: (link) => set({ link }),
}));
