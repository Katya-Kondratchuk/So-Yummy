import { BeatLoader } from 'react-spinners';

const LoadingSpiner = ({ color = '#8aa936', size = 12 }) => {
  return <BeatLoader color={color} size={size} />;
};

export default LoadingSpiner;
