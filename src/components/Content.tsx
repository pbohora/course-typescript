import React, { FC } from 'react';
import { CoursePart } from '../App';
import Part from './Part';

const Content: FC<{ courses: CoursePart[] }> = ({ courses }) => {
  return (
    <>
      {courses.map((course) => (
        <Part key={course.name} course={course} />
      ))}
    </>
  );
};

export default Content;
