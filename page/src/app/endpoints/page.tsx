import { getEndpoints } from "../api/get-enpoints";

const EndpointsPage = async () => {
  const endpoints = await getEndpoints();

  console.log({ endpoints });

  return <div>EndpointsPage</div>;
};

export default EndpointsPage;
