import TableHeader from './Headers/TableHeader';

const TableTwo = ({ TableBody, header, heading, cols }) => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          {heading}
        </h4>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[900px]">
          <TableHeader header={header} cols={cols}/>
          {TableBody}
        </div>
      </div>
    </div>
  );
};

export default TableTwo;
