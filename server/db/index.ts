export * from './localDB';
export * from './mongoDB';

export interface Data {
    streams: Array<{ title: string; url: string }>;
}

export interface DB {
    getData(): Promise<Array<Data>>;
}
