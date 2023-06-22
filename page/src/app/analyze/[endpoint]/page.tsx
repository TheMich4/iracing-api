import { getResponseTypes } from "./get-response-types";

interface AnalyzeEndpointPageProps {
  params: {
    endpoint: string;
  };
}

const AnalyzeEndpointPage = async ({
  params: { endpoint },
}: AnalyzeEndpointPageProps) => {
  const responseTypes = await getResponseTypes(endpoint);

  return (
    <div className="container flex flex-col gap-2 py-4">
      <h1>
        {"Analyze Endpoint "}
        <span className="italic">{endpoint}</span>
      </h1>

      <pre className="flex flex-col gap-1 rounded-md bg-primary/5 p-2">
        {Object.entries(responseTypes).map(([key, { type, optional }]) => (
          <div key={key}>
            <span className="font-bold">{key}</span>
            {": "}
            <span className="italic">{type}</span>
            {optional && (
              <span className="text-xs italic text-primary/80">
                {" (optional)"}
              </span>
            )}
          </div>
        ))}
      </pre>
    </div>
  );
};

export default AnalyzeEndpointPage;
