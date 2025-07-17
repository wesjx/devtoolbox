'use client'

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { useLocale } from '@/lib/locale-context'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

export default function LanguageToggle() {
    const { locale, setLocale } = useLocale()

    return (
        <ToggleGroup
            type="single"
            value={locale}
            onValueChange={(val) => {
                if (val) setLocale(val as 'en' | 'pt')
            }}
            variant="outline"
            className='font-mono w-3xs'
        >

            <ToggleGroupItem className='cursor-pointer' value="en" aria-label="English">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <p>En</p>
                    </TooltipTrigger>
                    <TooltipContent>English</TooltipContent>
                </Tooltip>
            </ToggleGroupItem>

            <ToggleGroupItem
                value="pt"
                aria-label="Português"
                className="cursor-pointer"
            >
                <Tooltip>
                    <TooltipTrigger asChild>
                        <p>Pt</p>
                    </TooltipTrigger>
                    <TooltipContent>Português</TooltipContent>
                </Tooltip>
            </ToggleGroupItem>
        </ToggleGroup>
    )
}
