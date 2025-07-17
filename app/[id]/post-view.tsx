"use client"
import LanguageToggle from "@/components/language-toggle";
import { PostSchema } from "@/components/posts";
import { ModeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useLocale } from "@/lib/locale-context";
import { getCategoryColor, getCategoryLabel } from "@/utils/category-helper";
import { ArrowUpRightFromSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa"

export default function PostView(post: PostSchema) {

  const { locale } = useLocale()

  return (
    <Card className="w-full max-w-4xl my-9 mx-auto border border-muted transition-all duration-200">
      <CardHeader className="space-y-4 px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Button asChild size="icon" variant="outline">
              <Link href="/">
                <FaArrowLeft />
              </Link>
            </Button>
            <ModeToggle />
            <LanguageToggle />
          </div>

          <div className="shrink-0">
            <Badge className={`${getCategoryColor(post.category).color} whitespace-nowrap`}>
              {getCategoryLabel(post.category, locale)}
            </Badge>
          </div>
        </div>

        <CardTitle className="text-2xl font-mono font-bold text-center break-words">
          {post.title}
        </CardTitle>

        {post.img_link && (
          <div className="w-full overflow-hidden rounded-md">
            <Image
              src={post.img_link}
              alt={post.title}
              width={800}
              height={500}
              className="w-full h-auto object-cover rounded-md max-h-[500px]"
            />
          </div>
        )}

        <CardDescription className="text-muted-foreground text-center px-2 sm:px-4">
          <p className="font-roboto text-base">
            {locale === 'en' ? post.subtitle_en : post.subtitle_pt}
          </p>
        </CardDescription>
      </CardHeader>

      <CardContent className="px-4 sm:px-6 pb-6">
        <p className="text-base whitespace-pre-line">
          {locale === 'en' ? post.description_en : post.description_pt}
        </p>
      </CardContent>

      <CardFooter className="px-4 sm:px-6 pb-6 flex justify-end gap-4">
        <Button asChild className="font-mono" size="lg">
          <Link target="_blank" href={post.link}>
            {locale === 'en' ? 'Access tool' : 'Acessar ferramenta'}
            <ArrowUpRightFromSquare className="ml-2" />
          </Link>
        </Button>
      </CardFooter>
    </Card>


  )
}