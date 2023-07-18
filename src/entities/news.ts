export interface News {
  id: number;
  attributes: {
    label: string;
    url: string;
    img: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}