import { TypeAnimation } from 'react-type-animation';
import { TypeAnimationProps } from 'react-type-animation/dist/esm/components/TypeAnimation/index.types';

export default function _TypeAnimation(props: TypeAnimationProps) {
  return (
    <span className="w-full block bg-blue-400 bg-opacity-10 p-3 rounded-lg">
      <TypeAnimation {...props} />
    </span>
  );
}
