import dynamic from "next/dynamic"

export const Forecast = dynamic(() => import("./index"), { ssr: false })
