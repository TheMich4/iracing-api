"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export const DataDisplay = (
  { data, endpoint }: { data: any; endpoint: string },
) => {
  const [page, setPage] = useState(0);

  return (
    <div className="container py-2 flex flex-col gap-2">
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl font-extrabold leading-tight tracking-tighter py-2">
          {"Data for "}
          <span className="font-bold italic">{`"${endpoint}"`}</span>
        </h1>
        <div className="flex flex-row gap-1 items-center">
          <Button
            size="sm"
            variant="outline"
            onClick={() => page > 0 && setPage((prev) => prev - 1)}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => page < data.length && setPage((prev) => prev + 1)}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="bg-primary/5 p-2 rounded-md">
        <pre>{JSON.stringify(data[page], null, 2)}</pre>
      </div>
    </div>
  );
};
