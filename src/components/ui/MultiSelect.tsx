import React from 'react';

import Select from 'react-select';
import { ColourOption, SizeOption } from '../../data/data.ts';
interface MultiSelectProps {
    options: readonly ColourOption[] | readonly SizeOption[];
  }
  


export default function MultiSelect({ options }: MultiSelectProps) {
   console.log(options);
   
  return (
    <Select
    defaultValue={[options[2], options[3]]}
    isMulti
    name="colors"
    options={options}
    className="basic-multi-select"
    classNamePrefix="select"
  />
  )
}
