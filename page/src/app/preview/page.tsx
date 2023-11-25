import Link from "next/link";
import IracingAPI from "iracing-api";

import { Button } from "@/components/ui/button";

const getPages = () => {
  const ir = new IracingAPI();

  return Object.keys(ir)
    .filter((key) => {
      if (["login", "instance"].includes(key)) return false;

      return typeof (ir as any)[key] === "function";
    })
    .sort();
};

const PreviewPage = () => {
  const pages = getPages();

  return (
    <div className="container grid grid-cols-1 gap-2 py-2 sm:grid-cols-2 md:grid-cols-3">
      {pages?.map((page) => (
        <Link href={`/preview/${page}`} prefetch={false}>
          <Button variant="outline" className="w-full">
            {page}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default PreviewPage;
