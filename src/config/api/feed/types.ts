export type FeedType = {
  image: string;
  date: string;
  description: string;
  title: string;
};

export type FeedListDataType = Promise<FeedType[]>;

export interface CreateFeedInterface {
  getFeed(): FeedListDataType;
}
