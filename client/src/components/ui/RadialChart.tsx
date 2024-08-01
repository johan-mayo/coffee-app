"use client";

import { TrendingUp } from "lucide-react";
import { PolarGrid, RadialBar, RadialBarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { roast: "Light", cups: 45, fill: "var(--color-light)" },
  { roast: "Medium", cups: 124, fill: "var(--color-medium)" },
  { roast: "Dark", cups: 74, fill: "var(--color-dark)" },
];

const chartConfig = {
  cups: {
    label: "Cups",
  },
  light: {
    label: "Light",
    color: "hsl(var(--chart-5))",
  },
  medium: {
    label: "Medium",
    color: "hsl(var(--chart-3))",
  },
  dark: {
    label: "Dark",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const RadialChart = () => {
  return (
    <Card className="flex flex-col bg-var(--color-medium) 100">
      <CardHeader className="items-center pb-0">
        <CardTitle>Coffee Roasts</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart data={chartData} innerRadius={30} outerRadius={100}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="roast" />}
            />
            <PolarGrid gridType="circle" />
            <RadialBar dataKey="cups" />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground text-center">
          Showing total cups drank ranked by roasts for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
};

export default RadialChart;
