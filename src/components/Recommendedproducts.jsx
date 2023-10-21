import Button from "../components/Button";
export default function Recommendedproducts(props) {
  const { imgSrc, title } = props;
  return (
    <div className="text-center">
      <div>
        <div className="bg-AntiFlashWhite mx-6 py-3 rounded-lg my-6 sm:px-4">
          <img
            className="h-32 max-w-full mx-auto sm:h-52"
            src={imgSrc}
            alt=""
          />
        </div>
        <div>
          <h2 className="font-bold text-2xl">{title}</h2>
        </div>
      </div>
      <Button alternateClassName="mt-6" text="SEE PRODUCT" />
    </div>
  );
}
