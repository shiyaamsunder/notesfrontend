export const Chip = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex font-semibold px-1 mb-3 text-sm text-red-500 bg-pink-200 w-fit rounded-md">
      {children}
    </div>
  );
};
