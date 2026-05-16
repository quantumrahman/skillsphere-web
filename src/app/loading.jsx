import { BeatLoader } from "react-spinners";

const LoadingPage = () => {
    return (
        <div className="w-full min-h-screen flex items-center justify-center">
            <BeatLoader size={15} color="#ffffff"/>
        </div>
    );
};

export default LoadingPage;
