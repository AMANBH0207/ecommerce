import moment from 'moment'

function BrandsBody({items, deleteBrand, changeStatus, editBrand}) {
  return (
    <>
        {items.map((brand: any, key: number) => (
                <div
                  className="grid grid-cols-4 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-4 md:px-6 2xl:px-7.5"
                  key={key}
                >
                  <div className="col-span-1 flex items-center">{brand?.name}</div>
                  <div className="col-span-1 flex items-center">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                      <div className="h-12.5 w-15 rounded-md">
                        <img src={brand?.image} alt="Product" />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 flex items-center">
                    <p className="text-sm text-black dark:text-white">
                      {brand?.status === 1 ? 'Active' : 'Inactive'}
                    </p>
                  </div>
                  <div className="col-span-1 flex items-center">
                    <div className="flex gap-2">
                      <button
                        className="text-sm text-white bg-yellow-500 p-2 rounded-md"
                        onClick={() => changeStatus(brand._id)}
                      >
                        {brand?.status === 0 ? 'Active' : 'Inactive'}
                      </button>
                      <button
                        className="text-sm text-white bg-blue-500 p-2 rounded-md"
                        onClick={() => editBrand(brand)}
                      >
                        Update
                      </button>
                      <button
                        className="text-sm text-white bg-red-500 p-2 rounded-md"
                        onClick={() => deleteBrand(brand._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}

    </>
  )
}

export default BrandsBody