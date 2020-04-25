import React, { FC } from 'react';
import { Courses } from '../types';

const Total: FC<{ courses: Courses[] }> = ({ courses }) => {
  return (
    <p>
      Number of exercises{' '}
      {courses.reduce((carry, part) => carry + part.exerciseCount, 0)}
    </p>
  );
};

export default Total;
