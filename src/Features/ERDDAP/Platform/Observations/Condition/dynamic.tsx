import dynamic from "next/dynamic"

export const ErddapObservedCondition = dynamic(() => import("./index"), { ssr: false })
