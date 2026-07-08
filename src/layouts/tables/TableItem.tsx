import FailureSvg from '@/assets/failure.svg?react';
import SuccessSvg from '@/assets/success.svg?react';
import { Badge } from "@/components/ui/badge";
import { TableCell, TableRow } from "@/components/ui/table";
import type { ITableItem } from "@/types/tables";

interface TableItemProps {
    data: ITableItem
}

const TableItem = ({ data }: TableItemProps) => {
    return (
        <TableRow>
            <TableCell className="text-primary w-93 h-15">{data.name}</TableCell>
            <TableCell className='w-52.25'>{data.location}</TableCell>
            <TableCell className='w-42.5'>{data.startDate}</TableCell>
            <TableCell className='w-42.5'>{data.endDate}</TableCell>
            <TableCell className='w-42.5'>
                {
                    data.successReaction
                        ?
                        <Badge className="w-7.75 h-7.75 bg-success-background text-success">
                            <SuccessSvg />
                            <span className="sr-only">success</span>
                        </Badge>
                        :
                        <Badge className="w-7.75 h-7.75 bg-failure-background text-failure">
                            <FailureSvg />
                            <span className="sr-only">failure</span>
                        </Badge>
                }
            </TableCell>
            <TableCell className='w-42.5'>
                {data.processCurrent} / {data.processAmount}
                <div className='w-28 h-1 bg-zinc-200 dark:bg-zinc-800'>
                    <div className={`h-1 bg-success`} style={{ width: `${Math.floor(data.processCurrent / data.processAmount * 100)}%` }}></div>
                </div>
            </TableCell>
            <TableCell className='w-42.5'>{'status'}
                <div className='flex w-28 h-1 gap-1'>
                    <div className='h-1 bg-sky-500' style={{ width: `${data.status[0]}%` }}></div>
                    <div className='h-1 bg-success' style={{ width: `${data.status[1]}%` }}></div>
                    <div className='h-1 bg-amber-600' style={{ width: `${data.status[2]}%` }}></div>
                    <div className='h-1 bg-red-600' style={{ width: `${data.status[3]}%` }}></div>
                </div>
            </TableCell>
        </TableRow>
    );
}

export default TableItem;
