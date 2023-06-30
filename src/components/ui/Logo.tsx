type Props = {
  className?: string;
};

export default function Logo({ className }: Props) {
  return (
    <h1 className={`text-3xl text-red-600 font-black italic font-mono ${className}`}>Moview</h1>
  );
}
