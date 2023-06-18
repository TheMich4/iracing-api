import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { endpointToMethod } from "@/config/endpoint-to-method";
import { X } from "lucide-react";
import Link from "next/link";

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
            <TableHead>Method</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {Object.entries(endpoints).map(([service, serviceEndpoints]) => (
            Object.entries(serviceEndpoints).map(([endpoint, info]) => {
              const method = endpointToMethod[`${service}/${endpoint}`];

              return (
                <TableRow>
                  <TableCell className="row-span-2">{service}</TableCell>
                  <TableCell>{`${service}/${endpoint}`}</TableCell>
                  <TableCell>
                    {method
                      ? (
                        <Link
                          href={`/preview/${method}`}
                          prefetch={false}
                          className="hover:underline"
                        >
                          {method}
                        </Link>
                      )
                      : <X className="w-5 h-5 text-red-500" />}
                  </TableCell>
                </TableRow>
              );
            })
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default EndpointsPage;
