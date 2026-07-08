export interface ITableItem {
    id: number;
    name: string;
    location: string;
    startDate: string;
    endDate: string;
    successReaction: boolean;
    processCurrent: number;
    processAmount: number;
    status: [number, number, number, number]
}

export interface ITableDataResponse {
    medications: ITableItem[]
}