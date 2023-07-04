import Link from "next/link";

type Props = {
  className?: string;
};

export default function Logo({ className }: Props) {
  return (
    <Link href="/">
      <h1 className={`text-3xl text-red-600 font-black italic font-mono ${className}`}>Moview</h1>
    </Link>
  );
}
