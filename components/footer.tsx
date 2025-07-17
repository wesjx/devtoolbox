'use client'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import { useLocale } from '@/lib/locale-context'

export function Footer() {
    const { locale } = useLocale()

    return (
        <footer className="w-full mt-16 py-6 px-4 text-muted-foreground">
            <Separator className="w-full" />
            <div className="p-6 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <Button
                        asChild
                        className='cursor-pointer'
                        size="default"
                        title="Feel free to give a suggestion"
                    >
                        <Link
                            href='mailto:wesjrpiri@gmail.com'
                            target='_blank'
                        >
                            {locale === 'en' ? 'Feel free to give me a suggestion' : 'Tem uma sujestao?'}
                            <FaEnvelope />

                        </Link>
                    </Button>

                    <Button
                        asChild
                        className='cursor-pointer'
                        size="icon"
                    >
                        <Link
                            href="https://www.linkedin.com/in/wesley-junio/"
                            target='_blank'
                        >
                            <FaLinkedin size={18} />
                        </Link>
                    </Button>

                    <Button
                        asChild
                        className='cursor-pointer'
                        size="icon"
                    >
                        <Link
                            href="https://github.com/wesjx"
                            target='_blank'
                        >
                            <FaGithub size={18} />
                        </Link>
                    </Button>
                </div>
                <p className="text-sm text-center sm:text-right">
                    {locale === 'en' ? 'Developed with ❤ by Wesley Silva' : 'Desenvolvido com ❤ por Wesley Silva'}
                </p>
            </div>
        </footer>
    )
}
