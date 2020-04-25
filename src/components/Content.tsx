import React, { FC } from 'react';
import { Courses } from '../types';

const Content: FC<{ courses: Courses[] }> = ({ courses }) => {
  return (
    <>
      {courses.map((course: Courses) => (
        <p key={course.name}>
          {course.name} {course.exerciseCount}
        </p>
      ))}
    </>
  );
};

export default Content;
