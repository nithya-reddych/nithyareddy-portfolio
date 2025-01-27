export interface Song {
    id: string;
    name: string;
    url: string;
    credits: string;
  }
  
  export interface AudioError {
    type: 'format' | 'network' | 'unknown';
    message: string;
  }