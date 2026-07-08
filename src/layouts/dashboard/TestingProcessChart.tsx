import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import type { ITestingProcess } from "@/types/dashboard";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

interface TestingProcessChartProps {
    data: ITestingProcess
}

const chartConfig = {
    day: {
        label: "day",
        color: "sky-100",
    },
} satisfies ChartConfig

const TestingProcessChart = ({ data }: TestingProcessChartProps) => {
    const chartData = [{
        tested: data.metrics[0].percentage,
        trials: data.metrics[1].percentage,
        approval: data.metrics[2].percentage,
    }
    ]

    return (
        <Card className="flex flex-col gap-0 justify-between">
            <CardHeader className="items-center pb-0">
                <CardTitle>{data.title}</CardTitle>
                <CardDescription>{data.period}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 justify-center items-center pb-0 p-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square w-1/2"
                >
                    <RadialBarChart
                        data={chartData}
                        innerRadius="80%"
                        outerRadius="100%"
                        barSize={9}
                    >
                        <RadialBar
                            dataKey="trials"
                            stackId="a"
                            fill="var(--color-chart-2)"
                            className="stroke-card stroke-3"
                        />
                        <RadialBar
                            dataKey="approval"
                            stackId="a"
                            fill="var(--color-chart-bg)"
                            className="stroke-card stroke-3"
                        />
                        <RadialBar
                            dataKey="tested"
                            fill="var(--color-primary)"
                            stackId="a"
                            className="stroke-card stroke-3"
                        />
                        <PolarRadiusAxis tick={false} axisLine={false}>
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-2xl font-bold"
                                                >
                                                    {data.metrics[0].percentage}%
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </PolarRadiusAxis>
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
                <div className="w-full flex gap-1 justify-between items-center">
                    <div className="w-4.5 h-2.25 bg-chart-2 rounded-sm"></div>
                    <div className="w-full">{data.metrics[2].label}</div>
                    {data.metrics[2].percentage}%
                </div>
            </CardFooter>
        </Card>
    );
}

export default TestingProcessChart;
