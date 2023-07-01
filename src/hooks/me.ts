import { AuthUser } from "@/model/user";
import useSWR from "swr";

export default function useMe() {
  const { data: user } = useSWR<AuthUser>("/api/me");

  return { user };
}
