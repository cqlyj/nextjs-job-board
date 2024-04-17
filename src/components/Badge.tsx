interface BadgeProps {
  children: React.ReactNode;
}

const Badge = ({ children }: BadgeProps) => {
  return (
    <span className="border rounded px-2 py-0.5 text-sm bg-muted text-muted-foreground font-medium">
      {children}
    </span>
  );
};
export default Badge;
