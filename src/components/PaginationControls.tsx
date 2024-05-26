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
						href={`/stream-sync/?page=${Number(page) - 1}${search && search !== "" ? `&search=${search}` : ""}`}
					/>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink isActive>{+page}</PaginationLink>
				</PaginationItem>

				<PaginationItem>
					<PaginationNext
						href={`/stream-sync/?page=${Number(page) + 1}${search && search !== "" ? `&search=${search}` : ""}`}
					/>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
};

export default PaginationControls;
