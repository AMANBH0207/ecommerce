import moment from 'moment';
import { BannersDataResponse } from '../../../services/types/actionTypes';

function BannerBody({ items, deleteBanners, changeStatus, editBanner }) {
  return (
    <>
      {items.map((product: BannersDataResponse, key: number) => (
        <div
          className="grid grid-cols-8 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-1 flex items-center">{product?.title}</div>
          <div className="col-span-1 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="h-12.5 w-15 rounded-md">
                <img src={product?.image} alt="Product" />
              </div>
            </div>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {product?.link}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {product?.status === 1 ? 'Active' : 'Inactive'}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {moment(product?.startDate).format('DD/MM/YYYY')}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {moment(product?.endDate).format('DD/MM/YYYY')}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <div className="flex gap-2">
              <button
                className="text-sm text-white bg-yellow-500 p-2 rounded-md"
                onClick={() => changeStatus(product._id)}
              >
                {product?.status === 0 ? 'Active' : 'Inactive'}
              </button>
              <button
                className="text-sm text-white bg-blue-500 p-2 rounded-md"
                onClick={() => editBanner(product)}
              >
                Update
              </button>
              <button
                className="text-sm text-white bg-red-500 p-2 rounded-md"
                onClick={() => deleteBanners(product._id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default BannerBody;
