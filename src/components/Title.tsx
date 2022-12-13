type Title = {
  name: string;
};

export function Title({ name }: Title) {
  return (
    <div className="flex h-full items-center justify-center">
      <p className="text-xxl font-bold text-white">{name}</p>
    </div>
  );
}
