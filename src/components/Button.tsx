import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

export const Button = ({
    children,
    className,
    href="#",
}: PropsWithChildren<{ className?: string; href?: string }>) => {

    return (
        <Link href={href}
            className={cn(
                "inline-flex items-center gap-2 px-6 h-12 rounded-xl",
                className
            )}
        >
            {children}
        </Link>
    );
};
