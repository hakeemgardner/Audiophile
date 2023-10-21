function CustomRadioButton() {
  return (
    <>
      <div className="border rounded-lg sm:w-72 hover:border-Peru">
        <label className="m-4 flex items-center space-x-2">
          <input
            type="radio"
            name="radio-10"
            className="hover:border-Peru h-5 w-5 accent-Peru"
          />
          <span className="font-bold text-sm ml-3">e-Money</span>
        </label>
      </div>
      <div className="border rounded-lg  mt-4 mb-4 hover:border-Peru">
        <label className="m-4 flex items-center space-x-2">
          <input
            type="radio"
            name="radio-10"
            className="hover:border-Peru h-5 w-5 accent-Peru "
          />
          <span className="font-bold text-sm ml-3">Cash on Delivery</span>
        </label>
      </div>
    </>
  );
}

export default CustomRadioButton;
