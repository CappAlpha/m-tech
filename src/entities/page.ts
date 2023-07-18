export interface Page {
  newsTitle?: string;
  header: {
    phone: string;
    menu: MenuItem[];
  };
  seo: Seo;
  directions?: Directions;
  hero?: Hero;
  about?: About;
  projects?: {
    title: string;
    projectsList: Project[];
  };
  vacancies?: {
    title: string;
    ourVacancies: Vacancy[];
  };
  solutions: {
    title: string;
    list: Solution[];
  }
  footer: {
    company?: string;
    address?: string;
  };
}

export interface Seo {
  title: string;
  description: string;
  keywords?: string;
}

export interface Hero {
  id: number;
  title: string;
  description: string;
  video: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
}

export interface Directions {
  id: number;
  title: string;
  list?: DirectionsItem[];
}

export interface DirectionsItem {
  id: number;
  title: string;
  text: string;
}

export interface MenuItem {
  id: number;
  label: string;
  name: string;
}

export interface DirectionsItem {
  id: number;
  title: string;
  text: string;
}

export interface About {
  id: number;
  title: string;
  aboutList: AboutItem[];
  quote: {
    quote: string;
    name: string;
    post: string;
    img: {
      data: {
        attributes: {
          url: string;
        };
      }[];
    };
  };
}

export interface AboutItem {
  id: number;
  title: string;
  count: number;
  text: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  imgTitle: string;
  img: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
}

export interface Vacancy {
  id: number;
  title: string;
  type?: string;
  url: string;
}

export interface Solution {
  id: number;
  title: string;
  type: string;
  video: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  file: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
}