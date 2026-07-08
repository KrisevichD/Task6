import { Bar, BarChart } from "recharts"

import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    type ChartConfig
} from "@/components/ui/chart"
import type { ITotalTestedDrugs } from "@/types/dashboard"

const chartConfig = {
    day: {
        label: "day",
        color: "sky-100",
    },
} satisfies ChartConfig

interface TestedDrugsChartProps {
    data: ITotalTestedDrugs
}

export default function TestedDrugsChart({ data }: TestedDrugsChartProps) {
    return (
        <Card className="flex flex-col gap-0 justify-between">
            <CardHeader>
                <CardTitle className="flex justify-between gap-1">
                    {data.title}
                    <Badge variant={'percentage'}>{data.changePercentage}%</Badge>
                    <div>{data.totalValue.toString().replace(/(?=\d{3}$)/g, ',')}</div>
                </CardTitle>
                <CardDescription>{data.period}</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
                <ChartContainer config={chartConfig} className="w-25.5 h-18.75">
                    <BarChart
                        accessibilityLayer
                        data={data.data}
                    >
                        <Bar
                            dataKey="value"
                            stackId="a"
                            fill="var(--color-primary)"
                            radius={4}
                            background={{ fill: 'var(--color-chart-bg)', radius: 4 }}
                            barSize={4}
                        />
                    </BarChart>
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
    )
}

