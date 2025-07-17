import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

type Props = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};


export function PaginationComponent({ currentPage, totalPages, onPageChange }: Props) {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
    <Pagination>
      <PaginationContent>
        {currentPage >= 1 && (
          <PaginationItem>
            <PaginationPrevious className="cursor-pointer">
              <button onClick={() => onPageChange(currentPage - 1)} />
            </PaginationPrevious>
          </PaginationItem>
        )}

        {pages.map((page) => (
          <PaginationItem className="cursor-pointer" key={page}>
            <PaginationLink isActive={page === currentPage}>
              <button onClick={() => onPageChange(page)}>{page}</button>
            </PaginationLink>
          </PaginationItem>
        ))}

        {currentPage <= totalPages && (
          <PaginationItem>
            <PaginationNext className="cursor-pointer">
              <button onClick={() => onPageChange(currentPage + 1)} />
            </PaginationNext>
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
