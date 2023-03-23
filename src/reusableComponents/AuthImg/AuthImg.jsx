import css from './AuthImg.module.css';
import { ReactComponent as MainImg } from '../../assets/images/authImages/authTransformer/mainImg.svg';
import { ReactComponent as HumanImg } from '../../assets/images/authImages/authTransformer/humanImg.svg';
import { ReactComponent as FirstImg } from '../../assets/images/authImages/authTransformer/firstImg.svg';
import { ReactComponent as SecondImg } from '../../assets/images/authImages/authTransformer/secondImg.svg';
import { ReactComponent as ThirdImg } from '../../assets/images/authImages/authTransformer/thirdImg.svg';
import { ReactComponent as FourthImg } from '../../assets/images/authImages/authTransformer/fourthSvg.svg';

const AuthImg = () => {
  return (
    <>
      <div className={css.imageMain}>
        <MainImg />
        <div className={css.humanimage}>
          <HumanImg />
        </div>
        <div className={css.firstimage}>
          <FirstImg />
        </div>
        <div className={css.secondimage}>
          <SecondImg />
        </div>
        <div className={css.thirdimage}>
          <ThirdImg />
        </div>
        <div className={css.fourthimage}>
          <FourthImg />
        </div>
        <div className={css.fifthimage}>
          <FourthImg />
        </div>
        <div className={css.sixthimage}>
          <FourthImg />
        </div>
      </div>
    </>
  );
};

export default AuthImg;
