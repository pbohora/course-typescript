import React, { FC } from 'react';
import { CoursePart } from '../App';

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};
const Part: FC<{ course: CoursePart }> = ({ course }) => {
  switch (course.name) {
    case 'Fundamentals':
      return (
        <div>
          {course.name} {course.description} {course.exerciseCount}
        </div>
      );

    case 'Using props to pass data':
      return (
        <div>
          {course.name} {course.groupProjectCount} {course.exerciseCount}
        </div>
      );

    case 'Deeper type usage':
      return (
        <div>
          {course.name} {course.description}
          {course.exerciseSubmissionLink} {course.exerciseCount}
        </div>
      );

    case 'Hello TypeScript':
      return (
        <div>
          {course.name} {course.description} {course.exerciseCount}
        </div>
      );

    default:
      return assertNever(course);
  }
};

export default Part;
