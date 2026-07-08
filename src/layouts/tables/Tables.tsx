import { getTableDataOptions } from "@/app/api/queries";
import Title from "@/components/common/Title";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import TableItem from "./TableItem";


const Tables = () => {
    const { data, isLoading } = useQuery(getTableDataOptions());
    const maxPage = data ? Math.floor(data?.medications.length / 9) : 0;
    const [currentPage, setCurrentPage] = useState<number>(0);

    const headers = [
        'NAME', 'LOCATION', 'START DATE', 'END DATE', 'SUCCESS REACTION', 'PROCESS', 'STATUS'
    ]

    const pageData = data ? data.medications.slice(currentPage * 9, (currentPage + 1) * 9) : [];

    const isFinalPage = currentPage + 1 > maxPage;
    const isFirstPage = currentPage - 1 < 0;

    const nextPage = () => setCurrentPage(current => current + 1)
    const prevPage = () => setCurrentPage(current => current - 1)

    return (
        <div className="w-full">
            <Title
                title="List of medications in development"
                subtitle="Brief summary of testing processes"
            />
            <Separator />
            <Table className="w-full">
                <TableHeader>
                    <TableRow>
                        {headers.map((item) =>
                            <TableHead key={item} className="h-8">{item}</TableHead>)}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data && pageData.map((item) => {
                        return (
                            <TableItem key={item.id} data={item} />
                        )
                    })}
                    <TableRow>
                        <TableCell>
                            {isLoading && <>loading...</>}
                        </TableCell>
                    </TableRow>
                </TableBody>
                <TableFooter>
                </TableFooter>
            </Table>
            <div className="w-full flex justify-between sm:justify-start py-1 gap-1">
                <Button
                    disabled={isFirstPage}
                    onClick={() => prevPage()}
                >
                    previous page
                </Button>
                <Button
                    disabled={isFinalPage}
                    onClick={() => nextPage()}
                >
                    next page
                </Button>
            </div>
        </div>
    );
}

export default Tables;
