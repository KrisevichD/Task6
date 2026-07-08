export interface IMetricItem {
    label: string;
    percentage: number;
}

export interface IChartDataPoint {
    day: string;
    value: number;
}

export interface ITotalTestedDrugs {
    title: string;
    period: string;
    changePercentage: number;
    totalValue: number;
    metrics: IMetricItem[];
    data: IChartDataPoint[];
}

export interface TimeRange {
    start: string;
    end: string;
}

interface IApprovalChartPoint {
    day: string;
    value: number;
    previousValue: number;
}

export interface IDrugApprovalRates {
    title: string;
    period: string;
    changePercentage: number;
    totalValue: number;
    timeRange: TimeRange;
    data: IApprovalChartPoint[];
}

export interface ITestingProcess {
    title: string;
    period: string;
    currentOverallPercentage: number;
    metrics: IMetricItem[];
}

export interface INumberOfPeopleTested {
    title: string;
    period: string;
    metrics: IMetricItem[];
}

export interface IDashboardResponce {
    totalTestedDrugs: ITotalTestedDrugs;
    drugApprovalRates: IDrugApprovalRates;
    testingProcess: ITestingProcess;
    numberOfPeopleTested: INumberOfPeopleTested;
}