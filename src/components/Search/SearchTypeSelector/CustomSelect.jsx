import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { updateSearchType } from 'redux/search/searchSlice';
const options = [
  { value: 'title', label: 'Title' },
  { value: 'ingredient', label: 'Ingredient' },
];
const portal = document.querySelector('#modalPortal');
const CustomSelect = () => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
    dispatch(updateSearchType(selectedOption.value));
  };

  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={options}
      placeholder="Select options"
      menuPosition="absolute"
      menuPortalTarget={portal}
      // Custom styling for the Select component
      styles={{
        control: (provided, state) => ({
          ...provided,
          border: 'none',
          borderRadius: '6px',
          backgroundColor: '#f2ecec',
          opacity: '0.5',
          borderStyle: 'none',
          outline: 'none',
          borderColor: state.isFocused ? 'none' : provided.borderColor,
          boxShadow: state.isFocused ? 'none' : provided.boxShadow,
          color: '#rgba(0, 0, 0, 0.5)',
          width: '146px',
          height: '34px',
          '@media (min-width: 768px)': {
            width: '175px',
            height: '41px',
          },
          '@media (min-width: 1440px)': {
            width: '198px',
            height: '49px',
          },
        }),
        indicatorSeparator: () => ({
          display: 'none',
        }),
        input: (provided, state) => ({
          ...provided,
          marginBottom: '0',
          color: '#000000',
          font: '14',
          lineHeight: '1.5',
        }),
        menu: () => ({
          border: 'none',
        }),
        // menuPortal: () => ({
        //   position: 'absolute',
        // }),
        menuList: (provided, state) => ({
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '8px',
          paddingLeft: '14px',
          paddingBottom: '8px',
          marginTop: '0',
          font: '12px',
          lineHeight: '18px',
          color: '#rgba(0, 0, 0, 0.5)',
          backgroundColor: '#ffffff',
          borderRadius: '6px',
          border: 'none', // add this property to remove border
          outline: 'none',
          borderStyle: 'none',
          borderColor: 'none',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#ffffff', // remove the hover background color
            borderStyle: 'none',
            borderColor: 'none',
            boxShadow: 'none',
            border: 'none',
            outline: 'none',
          },
          '&:focus': {
            backgroundColor: '#ffffff', // remove the focus background color
            borderStyle: 'none',
            borderColor: 'none',
            boxShadow: 'none',
            border: 'none',
            outline: 'none',
          },

          width: '146px',
          height: '62px',
          '@media (min-width: 768px)': {
            width: '175px',
            height: '74px',
            font: '14px',
            lineHeight: '21px',
          },
          '@media (min-width: 1440px)': {
            width: '198px',
            height: '78px',
          },
        }),
        option: (provided, state) => ({
          border: 'none',
          color: '#000000',
          opacity: '0.5',
          paddingBottom: '3px',

          '&:hover': {
            color: '#8BAA36',
            backgroundColor: '#ffffff', // remove the hover background color
          },
          '&:focus': {
            backgroundColor: '#ffffff', // remove the focus background color
          },
        }),
      }}
    />
  );
};

export default CustomSelect;
