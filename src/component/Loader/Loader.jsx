import { LineWave } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="flex justify-center  items-center fixed left-0 top-0 bg-black bg-opacity-50 w-[100%] h-[100vh] z-10 ">
      <LineWave
        height="100"
        width="100"
        color="#4755de"
        ariaLabel="line-wave"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        firstLineColor=""
        middleLineColor="white"
        lastLineColor=""
      />
    </div>
  );
}
