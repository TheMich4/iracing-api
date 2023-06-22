import { getIracingData } from "@/app/api/get-iracing-data";

interface AnalyzeEndpointPageProps {
  params: {
    endpoint: string;
  };
}

const AnalyzeEndpointPage = async ({
  params: { endpoint },
}: AnalyzeEndpointPageProps) => {
  const data = await getIracingData(endpoint);
  const responseType = data?.reduce(
    (acc: Record<string, string>, entry: any) => {
      Object.entries(entry).forEach(([key, value]) => {
        if (!acc[key]) {
          acc[key] = typeof value;
        }
      });

      return acc;
    },
    {}
  );

  return (
    <div className="container flex flex-col gap-2 py-4">
      <h1>
        {"Analyze Endpoint "}
        <span className="italic">{endpoint}</span>
      </h1>

      <pre className="flex flex-col gap-1 rounded-md bg-primary/5 p-2">
        {Object.entries(responseType).map(([key, valueType]) => (
          <div>{`${key}: ${valueType}`}</div>
        ))}
      </pre>
    </div>
  );
};

export default AnalyzeEndpointPage;
