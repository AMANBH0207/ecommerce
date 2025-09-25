
function TableHeader({ header }: { header: { name: string; key: string }[] }) {
  return (
    <div className="grid grid-cols-7 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
      {header.map((col) => (
        <div
          key={col.key}
          className="flex items-center"
          // You can add col-span dynamically if needed
        >
          <p className="font-medium">{col.name}</p>
        </div>
      ))}
    </div>
  );
}

export default TableHeader;
