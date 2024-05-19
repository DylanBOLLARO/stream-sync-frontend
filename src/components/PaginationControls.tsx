import React from "react";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationNext,
	PaginationPrevious,
	PaginationLink
} from "./ui/pagination";

const PaginationControls = ({ page, search = "" }: any) => {
	return (
		<Pagination>
			<PaginationContent className="flex flex-row gap-5">
				<PaginationItem>
					<PaginationPrevious
						href={`${process.env.NEXT_PUBLIC_FRONTEND_PREFIX}/?page=${Number(page) - 1}${search && search !== "" ? `&search=${search}` : ""}`}
					/>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink isActive>{+page}</PaginationLink>
				</PaginationItem>

				<PaginationItem>
					<PaginationNext
						href={`${process.env.NEXT_PUBLIC_FRONTEND_PREFIX}/?page=${Number(page) + 1}${search && search !== "" ? `&search=${search}` : ""}`}
					/>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
};

export default PaginationControls;
