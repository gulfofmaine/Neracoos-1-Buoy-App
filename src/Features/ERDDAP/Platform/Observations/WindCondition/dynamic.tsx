import dynamic from "next/dynamic"

export const ErddapWindObservedCondition = dynamic(() => import("./index"), { ssr: false })
