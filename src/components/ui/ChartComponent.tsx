import Chart from "chart.js/auto";
import type { Chart as ChartJS, ChartData, ChartOptions } from "chart.js";
import { getOverviewData } from "../../api/firebase/overview";
import type { OverviewDocument } from "../../types";
import { useEffect, useRef, useState } from "react";

const getStyledChartData = (
  rawData: OverviewDocument | null
): ChartData<"bar", number[], string> => {
  if (!rawData?.strategyMatrix) {
    return { labels: [], datasets: [] };
  }

  const Colors = ["#58cc02", "#1cb0f6", "#ffc800", "#ff4b4b", "#af42ff"];

  const datasets = rawData.strategyMatrix.datasets.map((dataset, index) => ({
    ...dataset,
    backgroundColor: Colors[index % Colors.length],
    borderRadius: 8,
    borderSkipped: false,
  }));

  return { ...rawData.strategyMatrix, datasets };
};

export const ChartComponent = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<ChartJS | null>(null);

  const [chartData, setChartData] = useState<OverviewDocument | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getOverviewData();
        if (data) {
          setChartData(data);
        } else {
          setError("Nenhum dado encontrado para o gráfico.");
        }
      } catch (err) {
        console.error(err);
        setError("Falha ao carregar os dados do gráfico.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (chartRef.current && chartData) {
      chartInstance.current?.destroy();

      const data = getStyledChartData(chartData);
      const options: ChartOptions<"bar"> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: true, position: "top" } },
      };

      chartInstance.current = new Chart(chartRef.current, {
        type: "bar",
        data: data,
        options: options,
      });
    }

    return () => {
      chartInstance.current?.destroy();
    };
  }, [chartData]);

  if (loading) {
    return <div className="text-center p-10">Carregando gráfico... ⏳</div>;
  }

  if (error) {
    return <div className="text-center p-10 text-red-500">{error} 😭</div>;
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[400px] max-h-[50vh] p-4 bg-white rounded-xl border-2 border-gray-200">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};
