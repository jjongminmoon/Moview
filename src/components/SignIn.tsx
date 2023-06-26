"use client";

import LogButton from "./ui/LogButton";
import { ClientSafeProvider, signIn } from "next-auth/react";

type Props = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
};

export default function SignIn({ providers, callbackUrl }: Props) {
  return (
    <>
      {Object.values(providers).map(({ name, id }) => (
        <LogButton key={id} onClick={() => signIn(id, { callbackUrl })} size="big">
          Sign In With {name}
        </LogButton>
      ))}
    </>
  );
}
