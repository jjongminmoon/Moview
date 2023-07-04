type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Section({ children, className }: Props) {
  return <section className={`px-40 ${className}`}>{children}</section>;
}
