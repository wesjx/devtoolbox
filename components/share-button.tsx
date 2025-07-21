import { Button } from "./ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose, DialogHeader, DialogFooter } from "./ui/dialog";
import { Input } from "./ui/input";
import { Copy, Share } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { useLocale } from "@/lib/locale-context";
import Link from "next/link";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { Label } from "./ui/label";

export default function ShareButton() {
    const [copied, setCopied] = useState(false);
    const { locale } = useLocale()
    const currentUrl = typeof window !== "undefined" ? window.location.href : "";

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(currentUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy!", err);
        }
    };

    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(currentUrl)}`;
    return (
        <Dialog>
            <DialogTrigger >
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button className="cursor-pointer" variant="outline" size="icon">
                            <Share />
                        </Button>

                    </TooltipTrigger>
                    <TooltipContent>
                        {locale === 'en' ? <p>Share Link</p> : <p>Compartilhar link</p>}
                    </TooltipContent>
                </Tooltip>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>
                        {locale === 'en' ? 'Share link' : 'Compartilhar link'}
                    </DialogTitle>
                    <DialogDescription>
                        {locale === 'en' ? 'Share the tool!' : 'Compartilhe a ferramenta!'}
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center gap-2">
                    <div className="w-full flex gap-2">
                        <Label htmlFor="link" className="sr-only">
                            Link
                        </Label>
                        <Input
                            id="link"
                            readOnly
                            value={currentUrl}
                        />
                            <Tooltip>
                            <TooltipTrigger asChild>
                                <Button className="cursor-pointer" size="icon" onClick={handleCopy}>
                                    <Copy />
                                </Button>

                            </TooltipTrigger>
                            <TooltipContent>
                                {locale === 'en' ? (
                                    copied ? <p>Copied</p> : <p>Copy</p>
                                ) : (
                                    copied ? <p>Copiado</p> : <p>Copiar</p>
                                )}
                            </TooltipContent>
                        </Tooltip>
                    </div>
                </div>
                <DialogFooter className="sm:justify-between">
                    <div className="flex items-center align-middle gap-2">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button className="cursor-pointer" size="icon">
                                    <Link target="_blank" href={linkedInUrl}>
                                        <FaLinkedin />
                                    </Link>
                                </Button>

                            </TooltipTrigger>
                            <TooltipContent>
                                <p>LinkedIn</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button className="cursor-pointer" size="icon">
                                    <Link target="_blank" href={whatsappUrl}>
                                        <FaWhatsapp />
                                    </Link>
                                </Button>

                            </TooltipTrigger>
                            <TooltipContent>
                                <p>WhatsApp</p>
                            </TooltipContent>
                        </Tooltip>

                    </div>
                    <DialogClose asChild>
                        <Button className="cursor-pointer" type="button" variant="destructive">
                            {locale === 'en' ? 'Close' : 'Fechar'}
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog >
    )
}
