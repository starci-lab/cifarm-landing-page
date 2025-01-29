"use client";

import { useReadingProgress } from "@/hooks/useReadingProgress";
import { FC } from "react";

export const ScrollProgressBar: FC = () => {
    const completion = useReadingProgress();

    return (
        <div
            className="fixed top-0 left-0 w-full h-1 bg-brown z-50 transition-all duration-150"
            style={{ width: `${completion}%` }}
        />
    );
};
