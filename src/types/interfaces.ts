export interface Insight {
  text: string;
  emotion: string;
}

export interface Highlight {
  line: string;
  emotion: string;
  meaning: string;
}

export interface CompleteDataType {
  name: string;
  date: string;
  duration: number;
  status: string;
  action: string;
  description: string;
  insights: Insight;
  highlights: Highlight[];
  engaging: string[];
}
export interface ExampleDataType {
  name: string;
  creator: Object;
  original_video: string;
  finished_video: string;
  date: string;
  description: string;
  media_geral: number;
  upper_threshold: number;
  lower_threshold: number;
  "predictor.looking_per_frame": Array<number>;
  "predictor.total_per_frame": Array<number>;
  percentage_looking: Array<number>;
  positive_highlights_seconds: Array<Array<number>>;
  negative_highlights_seconds: Array<Array<number>>;
}
export interface ResumedDataType {
  key: string;
  name: string;
  date: string;
  duration: number;
  status: string;
  action: string;
}

export type Data = {
  "predictor.looking_per_frame": Array<number>;
  "predictor.total_per_frame": Array<number>;
  percentage_looking: Array<number>;
  media_geral: number;
  upper_threshold: number;
  lower_threshold: number;
  // positive_highlights_seconds: Array<Array<number>>;
  // negative_highlights_seconds: Array<Array<number>>;
  positive_highlight_segments: Array<{
    start_second: number;
    end_second: number;
    text: string;
  }>;

  negative_highlight_segments: Array<{
    start_second: number;
    end_second: number;
    text: string;
  }>;
};

export type Creator = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  birth_date: null;
  profile_image: null;
  is_staff: boolean;
  is_active: boolean;
  age: number;
  total_lectures: number;
};

export type Lecture = {
  id: number;
  creator: Creator;
  name: string;
  original_video: string;
  finished_video: string;
  finished: boolean;
  description: string;
  date: string;
  data: Data;
};
