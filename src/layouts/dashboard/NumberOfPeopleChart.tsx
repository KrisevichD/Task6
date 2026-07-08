import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import type { INumberOfPeopleTested } from "@/types/dashboard";
import { RadialBar, RadialBarChart } from "recharts";

interface NumberOfPeopleChartProps {
    data: INumberOfPeopleTested
}

const chartConfig = {
    day: {
        label: "day",
        color: "sky-100",
    },
} satisfies ChartConfig

const NumberOfPeopleChart = ({ data }: NumberOfPeopleChartProps) => {
    const chartData = [{ tested: data.metrics[0].percentage, "non-tested": data.metrics[1].percentage, full: 100 }]

    return (
        <Card className="flex flex-col gap-0 justify-between">
            <CardHeader className="items-center pb-0">
                <CardTitle>{data.title}</CardTitle>
                <CardDescription>{data.period}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 justify-center items-center pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square w-1/2"
                >
                    <RadialBarChart
                        data={chartData}
                        endAngle={180}
                        innerRadius="80%"
                        outerRadius="100%"
                    >
                        <RadialBar
                            dataKey="tested"
                            fill="var(--color-primary)"
                            stackId="a"
                            barSize={7}
                            cornerRadius={5}
                            className="stroke-transparent stroke-2"
                        />
                        <RadialBar
                            dataKey="full"
                            stackId="a"
                            cornerRadius={5}
                            fill="var(--color-chart-bg)"
                            className="stroke-transparent stroke-2"
                        />
                    </RadialBarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex flex-col gap-1.5">
                <div className="w-full flex gap-1 justify-between items-center">
                    <div className="w-4.5 h-2.25 bg-primary rounded-sm"></div>
                    <div className="w-full">{data.metrics[0].label}</div>
                    {data.metrics[0].percentage}%
                </div>
                <div className="w-full flex gap-1 justify-between items-center">
                    <div className="w-4.5 h-2.25 bg-chart-bg rounded-sm"></div>
                    <div className="w-full">{data.metrics[1].label}</div>
                    {data.metrics[1].percentage}%
                </div>
            </CardFooter>
        </Card>
    );
}

export default NumberOfPeopleChart;
