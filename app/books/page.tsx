import BooksPage from "@/components/books/BooksPage";

import { searchParamsProps } from "@/types/types";
import React from "react";

export const dynamic = "force-dynamic";

async function Books({ searchParams }: searchParamsProps) {
  return <BooksPage searchParams={searchParams} />;
}

export default Books;
