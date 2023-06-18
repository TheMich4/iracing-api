import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { getEndpoints } from "../api/get-enpoints";

const EndpointsPage = async () => {
  const endpoints = await getEndpoints();

  if (!endpoints) return null;

  return (
    <div className="container py-2">
      <Table className="border rounded-md">
        <TableHeader>
          <TableRow>
            <TableHead>Service</TableHead>
            <TableHead>Endpoint</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {Object.entries(endpoints).map(([service, serviceEndpoints]) => (
            Object.entries(serviceEndpoints).map(([endpoint, info]) => (
              <TableRow>
                <TableCell className="row-span-2">{service}</TableCell>
                <TableCell>{`${service}/${endpoint}`}</TableCell>
              </TableRow>
            ))
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default EndpointsPage;
