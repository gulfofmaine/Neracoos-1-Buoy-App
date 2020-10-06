import dynamic from "next/dynamic"

export const ErddapCurrentPlatformConditions = dynamic(() => import("./index"), { ssr: false })
