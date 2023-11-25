import { getIracingData } from "@/app/api/get-iracing-data";

export const getResponseTypes = async (endpoint: string) => {
  const data = await getIracingData(endpoint);
  console.log({ data });
  const responseType = data?.reduce(
    (acc: Record<string, string>, entry: any, index: number) => {
      Object.entries(entry).forEach(([key, value]) => {
        if (!acc[key]) {
          acc[key] = {
            type: typeof value,
            optional: index === 0 ? false : true,
          };
        }
      });

      return acc;
    },
    {}
  );
  return Object.entries(responseType ?? {})
    .sort(([keyA], [keyB]) => {
      if (keyA < keyB) {
        return -1;
      }

      if (keyA > keyB) {
        return 1;
      }

      return 0;
    })
    .reduce((acc, [key, value]) => {
      acc[key] = value;

      return acc;
    }, {} as Record<string, string>);
};
