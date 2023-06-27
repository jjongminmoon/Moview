"use client";

import axios from "axios";
import { options } from "@/app/api/movies/movies";
import { SWRConfig } from "swr";

type Props = {
  children: React.ReactNode;
  options?: any;
};

export function SWRConfigContext({ children }: Props) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) =>
          axios.get(url, options).then((response) => response.data.results || response.data)
      }}
    >
      {children}
    </SWRConfig>
  );
}
