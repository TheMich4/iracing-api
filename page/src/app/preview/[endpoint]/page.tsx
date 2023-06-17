import { getIracingData } from "@/app/api/get-iracing-data";

import { DataDisplay } from "./data-display";

interface ActionPageProps {
  params: {
    endpoint: string;
  };
}

const ActionPage = async ({ params: { endpoint } }: ActionPageProps) => {
  const data = await getIracingData(endpoint);

  if (!data) {
    return <div className="container">{`No data for ${endpoint}`}</div>;
  }

  return <DataDisplay data={data} endpoint={endpoint} />;
};

export default ActionPage;
