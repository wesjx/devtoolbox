"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function useCurrentUrl() {
    const pathname = usePathname()
    const [currentUrl, setCurrentUrl] = useState("")

    useEffect(() => {
        if (typeof window !== "undefined") {
            setCurrentUrl(window.location.origin + pathname)
        }
    }, [pathname])

    return currentUrl
}
