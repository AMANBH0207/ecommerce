
function ProductsBody({ items, deleteProducts, updateProduct }) {
  return (
    <>
      {items?.map((product, key: number) => (
        <div
          className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-6 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-1 flex items-center">{product?.name}</div>
          <div className="col-span-1 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="h-16 w-16 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
                <img
                  src={product?.images[0]?.url}
                  alt="Product Image"
                  className="max-h-full max-w-full object-contain cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {product?.category?.name}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {product?.price}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {product?.stock}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <button className="text-sm text-white bg-yellow-500 p-2 rounded-md">
              {product?.status === 0 ? 'Active' : 'Inactive'}
            </button>
            <button className="ml-2 text-sm text-white bg-blue-500 p-2 rounded-md" onClick={()=>{updateProduct(product)}}>
              Update
            </button>
            <button className="ml-2 text-sm text-white bg-red-500 p-2 rounded-md" onClick={() => deleteProducts(product._id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProductsBody;
