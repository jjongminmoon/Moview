import SignIn from "@/components/SignIn";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import { redirect } from "next/navigation";

type Props = {
  searchParams: {
    callbackUrl: string;
  };
};

export default async function SignInPage({ searchParams: { callbackUrl } }: Props) {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  const providers = (await getProviders()) ?? {};

  return (
    <section className="flex justify-center pt-72">
      <SignIn providers={providers} callbackUrl={callbackUrl ?? "/"} />
    </section>
  );
}
