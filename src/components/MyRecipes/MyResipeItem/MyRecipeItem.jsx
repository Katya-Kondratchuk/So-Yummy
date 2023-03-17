import React from 'react';
import SuperBtn from '../../../reusableComponents/SuperBtn/SuperBtn';
import TrashButton from '../../../reusableComponents/TrashButton/TrashButton';
import css from '../MyResipeItem/MyRecipeItem.module.css'
import ImageCard from '../ImageCard/ImageCard';
import TitleRecip from '../TitleRecip/TitleRecip';
import Textt from '../Text/Text';
import Time from '../Time/Time';

const MyRecipeItem = () => {

  return (
    <li  className={css.cardItem}>
      <ImageCard image="https://img.theculturetrip.com/wp-content/uploads/2019/12/2aaeed6.jpg"/>
      <div className={css.mainContainer}>
        <div className={css.wrapperButtons}>
          <TitleRecip text="Apple Frangipan Tart" />
          <div>
            <TrashButton bgColorClass={'darkBcg'} />
          </div>
        </div>
        <Textt text="Apple Frangipane Tart is a classic and elegant treat fit for any dessert table. A crisp, sweet-crust is d with rich almond frangipane filling, baked with sliced apples and finished with apricot preservesd with rich almond frangipane filling, baked with sliced apples and finished with apricot preservesd with rich almond frangipane filling, baked with sliced apples and finished with apricot preservesfilled with rich almond frangipane filling, baked with sliced apples and finished with apricot preserves.
        ple Frangipane Tart is a classic and elegant treat fit for any dessert table. A crisp, sweet-crust is d with rich almond frangipane filling, baked with sliced apples and finished with apricot preservesd with rich almond frangipane filling, baked with sliced apples and finished with apricot preservesd with rich almond frangipane filling, baked with sliced apples and finished with apricot preservesfilled with rich almond frangipane filling, baked with sliced apples and finished with apricot preserves." />
        {/* <Textt text="We threw a ladies Melbourne Cup lunch and this was our dessert. Super quick to prepare using store bought pastry." /> */}
        <div className={css.wrapperUp}>
          <div>
            <Time text="30 m" />
          </div>
          <div className={css.superBtnWrapper}>
            <SuperBtn title="See recipe" lnk to="/main" />
          </div>
        </div>
      </div>
    </li>
          )}

export default MyRecipeItem;



// =====================================================

// import React from 'react';
// import SuperBtn from '../../../reusableComponents/SuperBtn/SuperBtn';
// import TrashButton from '../../../reusableComponents/TrashButton/TrashButton';
// import ImageCard from '../ImageCard/ImageCard';
// import TitleRecip from '../TitleRecip/TitleRecip';
// import Textt from '../Text/Text';
// import Time from '../Time/Time';
// import css from '../MyResipeItem/MyRecipeItem.module.css'

// const MyRecipeItem = ({
//   id,
//   title,
//   time,
//   text,
//   imgComponent,
//   trashClass,
//   onDelete,
// }) => {

//   return (
//     <li  className={css.cardItem}>
//       <ImageCard image={imgComponent}/>
//       <div className={css.mainContainer}>
//         <div className={css.wrapperButtons}>
//           <TitleRecip text={title} />
//           <div>
//             <TrashButton bgColorClass={trashClass} onDelete={onDelete}/>
//           </div>
//         </div>
//         <Textt text={text} />
//         <div className={css.wrapperUp}>
//           <div>
//             <Time text={time} />
//           </div>
//           <div className={css.superBtnWrapper}>
//             <SuperBtn title="See recipe" lnk to="/myrecipes/id" />
//           </div>
//         </div>
//       </div>
//     </li>
//   )}

// export default MyRecipeItem;









