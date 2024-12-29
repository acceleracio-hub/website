export type TDetails = {
  whatLearn: Array<string>;
  extraNote?: string;
};

export type TLesson = {
  title: string;
  details: TDetails;
};
