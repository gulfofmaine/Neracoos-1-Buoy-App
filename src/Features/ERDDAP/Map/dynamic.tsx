import dynamic from "next/dynamic"

export const ErddapMap = dynamic(() => import("./index"), { ssr: false })
