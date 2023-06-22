type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Section({ children, className }: Props) {
  return <section className={`w-full px-40 ${className}`}>{children}</section>;
}
