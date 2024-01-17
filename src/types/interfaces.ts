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

export interface ResumedDataType {
  key: string;
  name: string;
  date: string;
  duration: number;
  status: string;
  action: string;
}
