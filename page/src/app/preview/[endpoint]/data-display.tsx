"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export const DataDisplay = ({
  data,
  endpoint,
}: {
  data: any;
  endpoint: string;
}) => {
  const [page, setPage] = useState(0);

  return (
    <div className="container flex flex-col gap-2 py-2">
      <div className="flex flex-row justify-between">
        <h1 className="py-2 text-2xl font-extrabold leading-tight tracking-tighter">
          {"Data for "}
          <span className="font-bold italic">{`"${endpoint}"`}</span>
        </h1>
        <div className="flex flex-row items-center gap-1">
          <Button
            disabled={page === 0}
            size="sm"
            variant="outline"
            onClick={() => page > 0 && setPage((prev) => prev - 1)}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            disabled={page === data.length - 1}
            size="sm"
            variant="outline"
            onClick={() => page < data.length && setPage((prev) => prev + 1)}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="rounded-md bg-primary/5 p-2">
        <pre>{JSON.stringify(data[page], null, 2)}</pre>
      </div>
    </div>
  );
};
