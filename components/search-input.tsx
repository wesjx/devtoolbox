"use client"

import { useLocale } from "@/lib/locale-context"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Search } from "lucide-react"

type Props = {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
    selectedCategory: string;
    setSelectedCategory: (value: string) => void;
}

export default function SearchInput({
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
}: Props) {
    const { locale } = useLocale()

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-row justify-between gap-1 w-full">
                <Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                    type="search"
                    placeholder={`${locale === 'en' ? 'Search a tool...' : 'Porcurar uma ferramenta...'}`} />
                <Button className="cursor-pointer" type="submit" variant="outline">
                    <Search />
                </Button>

            </div>

            <div className="w-full sm:w-auto">
                <Select
                    value={selectedCategory}
                    onValueChange={setSelectedCategory}
                >
                    <SelectTrigger className="w-[240px] cursor-pointer">
                        <SelectValue
                            placeholder={`${locale === 'en' ? 'Select a category' : 'Selecione uma categoria'}`}
                        />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>{`${locale === 'en' ? 'Categories' : 'Categorias'}`}</SelectLabel>
                            <SelectItem value="all">{`${locale === 'en' ? 'All' : 'Todas'}`}</SelectItem>
                            <SelectItem value="tips">{`${locale === 'en' ? 'Tips' : 'Dicas'}`}</SelectItem>
                            <SelectItem value="ui/ux">UI/UX</SelectItem>
                            <SelectItem value="data_base">{`${locale === 'en' ? 'DataBase' : 'Banco de dados'}`}</SelectItem>
                            <SelectItem value="ai">{`${locale === 'en' ? 'AI' : 'IA'}`}</SelectItem>
                            <SelectItem value="tools">{`${locale === 'en' ? 'Tools' : 'Ferramentas'}`}</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}


