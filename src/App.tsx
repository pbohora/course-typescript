import React, { FC } from 'react';
import Content from './components/Content';
import Header from './components/Header';
import Total from './components/Total';
interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface CourseContainDescription extends CoursePartBase {
  description: string;
}

interface CoursePartOne extends CourseContainDescription {
  name: 'Fundamentals';
  // description: string;
}

interface CoursePartTwo extends CoursePartBase {
  name: 'Using props to pass data';
  groupProjectCount: number;
}

interface CoursePartThree extends CourseContainDescription {
  name: 'Deeper type usage';
  // description: string;
  exerciseSubmissionLink: string;
}

interface CoursePartFour extends CourseContainDescription {
  name: 'Hello TypeScript';
}

export type CoursePart =
  | CoursePartOne
  | CoursePartTwo
  | CoursePartThree
  | CoursePartFour;

const App: FC = () => {
  const courseName = 'Half Stack application development';
  const courseParts: CoursePart[] = [
    {
      name: 'Fundamentals',
      exerciseCount: 10,
      description: 'This is an awesome course part',
    },
    {
      name: 'Using props to pass data',
      exerciseCount: 7,
      groupProjectCount: 3,
    },
    {
      name: 'Deeper type usage',
      exerciseCount: 14,
      description: 'Confusing description',
      exerciseSubmissionLink: 'https://fake-exercise-submit.made-up-url.dev',
    },
    {
      name: 'Hello TypeScript',
      exerciseCount: 14,
      description: 'Confusing description',
    },
  ];
  return (
    <div>
      <Header name={courseName} />
      <Content courses={courseParts} />
      <Total courses={courseParts} />
    </div>
  );
};
export default App;
