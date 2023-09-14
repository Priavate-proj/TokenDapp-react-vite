import { FallingLines } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="flex justify-center  items-center fixed left-0 top-0 bg-black bg-opacity-50 w-[100%] h-[100vh] z-10 ">
      <FallingLines
        color="#ebb304"
        width="80"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    </div>
  );
}
