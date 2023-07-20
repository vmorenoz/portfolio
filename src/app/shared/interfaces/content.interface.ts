export interface IContent {
  spanish: IContentTranslation,
  english: IContentTranslation,
}

export interface IContentTranslation {
  toolbar: {
    links: {
      home: string;
      about: string;
      work: string;
      contact: string;
    };
  };
  landing: {
    sections: {
      home: {
        heading1: string;
        heading2: string;
        span1: string;
        heading3: string;
      };
      about: {
        heading1: string;
        heading2: string;
        paragraph1: string;
        skills: {
          design: string;
          angular: string;
          laravel: string;
          spring: string;
          node: string;
        };
        button1: string;
      };
      work: {
        heading1: string;
        heading2: string;
        projects: {
          project1: {
            title: string;
            description: string;
            button: string;
          };
          project2: {
            title: string;
            description: string;
            button: string;
          };
          project3: {
            title: string;
            description: string;
            button: string;
          };
        };
      };
      contact: {
        heading1: string;
        heading2: string;
        contactOptions: {
          phone: {
            label: string;
            value: string;
          };
          email: {
            label: string;
            value: string;
          };
          website: {
            label: string;
            value: string;
          };
          address: {
            label: string;
            value: string;
          };
        };
        form: {
          title: string;
          name: string;
          email: string;
          phone: string;
          subject: string;
          message: string;
          button: string;
        };
      };
      footer: {
        heading1: string;
        copy: string;
      };
    };
  };
}
