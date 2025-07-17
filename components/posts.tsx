"use client"

import { getPosts } from "@/data/getPosts";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import SearchInput from "./search-input";
import { Separator } from "./ui/separator";
import { useEffect, useState } from "react";
import { PaginationComponent } from "./pagination";
import { useLocale } from "@/lib/locale-context";
import { getCategoryColor, getCategoryLabel } from "@/utils/category-helper";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight, ArrowUpRightFromSquare, Loader2Icon } from "lucide-react";
import LoadingIndicator from "./loading-indicator";

export type PostSchema = {
    id: number;
    title: string;
    subtitle_pt: string;
    subtitle_en: string;
    description_pt: string;
    description_en: string;
    category: string;
    link: string;
    img_link: string | null;
}

const items_per_page = 10

export default function Posts() {
    const [data, setData] = useState<PostSchema[]>([])
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const { locale } = useLocale()

    useEffect(() => {
        async function fetchData() {
            const res = await getPosts();
            setData(res)
            setIsLoading(false)
        }

        fetchData()
    }, [])

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, selectedCategory]);

    const filteredItems = data.filter((item) => {
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const totalPages = Math.ceil(filteredItems.length / items_per_page);
    const startIndex = (currentPage - 1) * items_per_page;
    const currentItems = filteredItems.slice(startIndex, startIndex + items_per_page);

    console.log(filteredItems)

    return (
        <section className="max-w-5xl mx-auto p-4 space-y-10">
            <Separator className="w-full" />
            <SearchInput
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                setSelectedCategory={setSelectedCategory}
                selectedCategory={selectedCategory} />
            {isLoading ? (
                <div className="flex align-middle justify-center m-6 p-3">
                    <Loader2Icon size={70} className="animate-spin" />
                </div>
            ) : (

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {currentItems.map((post =>
                        <Card
                            className="justify-around transition-all duration-200 border border-muted hover:border-primary hover:shadow-md hover:scale-[1.01]"
                            key={post.id}>
                            <CardHeader>
                                <div className="my-1 flex flex-wrap align-middle justify-between">
                                    <CardTitle className="font-mono">{post.title}</CardTitle>

                                    <Badge className={getCategoryColor(post.category).color}>
                                        {getCategoryLabel(post.category, locale)}
                                    </Badge>
                                </div>
                                <CardDescription>
                                    <p className="font-roboto">{locale === 'en' ? post.subtitle_en : post.subtitle_pt}</p>
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="line-clamp-2">{locale === 'en' ? post.description_en :
                                    post.description_pt}</p>
                            </CardContent>
                            <CardFooter className="gap-6">
                                <Button asChild className="cursor-pointer font-mono" variant='outline'>
                                    <Link href={`/${post.id}`} >
                                        {locale === 'en' ? 'Read more' : 'Ler mais'}
                                        <ArrowRight />
                                        <LoadingIndicator/>
                                    </Link>
                                </Button>
                                <Button asChild className="cursor-pointer font-mono" size='default' variant='default'>
                                    <Link
                                        prefetch={false}
                                        target="_blank"
                                        href={post.link}
                                        >
                                        {locale === 'en' ? 'Access tool' : 'Acessar ferramenta'}
                                        <ArrowUpRightFromSquare />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            )
            }

            <PaginationComponent
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </section >

    )
}