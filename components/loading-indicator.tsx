"use client"

import { Loader2Icon } from "lucide-react"
import { useLinkStatus } from "next/link"

export default function LoadingIndicator() {
    const { pending } = useLinkStatus()

    return pending ? (
        <div>
            <Loader2Icon className="animate-spin" />
        </div>
    ) : null
}