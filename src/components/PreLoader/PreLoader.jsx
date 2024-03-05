import { LoaderWrapper } from "./PreLoader.styled";
import { Oval } from 'react-loader-spinner';
export const PreLoader = () => {
    return (
      <LoaderWrapper>
        <Oval
          height={120}
          width={120}
          color="#757575"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#757575"
          strokeWidth={4}
          strokeWidthSecondary={2}
        />
      </LoaderWrapper>
    );
};
