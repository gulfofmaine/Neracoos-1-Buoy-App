import React from "react"
import { NextRouter } from "next/router"
import { RouterContext } from "next/dist/next-server/lib/router-context"

export function withTestRouter(tree: React.ReactElement, router: Partial<NextRouter> = {}) {
  const {
    route = "",
    pathname = "",
    query = {},
    asPath = "",
    isFallback = false,
    basePath = "/",
    isLocaleDomain = true,
    push = async () => true,
    replace = async () => true,
    reload = () => null,
    back = () => null,
    prefetch = async () => undefined,
    beforePopState = () => null,
    isReady = true,
    isPreview = false,

    events = {
      on: () => null,
      off: () => null,
      emit: () => null,
    },
  } = router

  return (
    <RouterContext.Provider
      value={{
        route,
        pathname,
        basePath,
        query,
        asPath,
        push,
        replace,
        reload,
        back,
        prefetch,
        beforePopState,
        isFallback,
        events,
        isLocaleDomain,
        isReady,
        isPreview,
      }}
    >
      {tree}
    </RouterContext.Provider>
  )
}
