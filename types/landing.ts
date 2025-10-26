export type FeatureItem = {
  icon?: string;
  title?: string;
  description?: string;
};

export type Features = {
  title?: string;
  items?: FeatureItem[];
};

export type Landing = {
  title: string;
  image?: {
    asset?: any;
    alt?: string;
  };
  youtubeUrl?: string;
  video?: {
    asset?: {
      url: string;
    };
  };
  ctaText?: string;
  ctaBtnText?: string;
};
