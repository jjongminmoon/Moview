type Props = {
  className?: string;
  children: React.ReactNode;
};

export default function Title({ className, children }: Props) {
  return <h1 className={`text-3xl font-semibold text-center ${className}`}>{children}</h1>;
}
