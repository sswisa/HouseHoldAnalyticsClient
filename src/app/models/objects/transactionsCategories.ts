export interface IIconClass {
  fill: string;
  outline: string;
  color: string;
}

export interface ICategoryProperties {
  class: IIconClass;
  title: string;
}

export interface ITransactionsCategories {
  furnishing: ICategoryProperties;
  gas: ICategoryProperties;
  vehicles: ICategoryProperties;
  software: ICategoryProperties;
  electronics: ICategoryProperties;
  computers: ICategoryProperties;
  health: ICategoryProperties;
  groceries: ICategoryProperties;
  fashion: ICategoryProperties;
  vacation: ICategoryProperties;
  travel: ICategoryProperties;
  leisure: ICategoryProperties;
  fitness: ICategoryProperties;
  commutes: ICategoryProperties;
  jewelries: ICategoryProperties;
  banking: ICategoryProperties;
  clothing: ICategoryProperties;
  dinning: ICategoryProperties;
  food: ICategoryProperties;
  restaurants: ICategoryProperties;
  amazon: ICategoryProperties;
  target: ICategoryProperties;
  baby: ICategoryProperties;
  gym: ICategoryProperties;
  shopping: ICategoryProperties;
  flights: ICategoryProperties;
}


export const transactionsCategories: ITransactionsCategories = {
  furnishing: {
    class: {
      fill: '',
      outline: '',
      color: '',
    },
    title: 'furnishing'
  },
  gas: {
    class: {
      fill: 'flaticon-car-1',
      outline: '',
      color: '',
    },
    title: 'gas'
  },
  vehicles: {
    class: {
      fill: '',
      outline: '',
      color: '',
    },
    title: 'vehicles'
  },
  software: {
    class: {
      fill: 'flaticon-coding',
      outline: '',
      color: '',
    },
    title: 'software'
  },
  electronics: {
    class: {
      fill: 'flaticon-plug-1',
      outline: '',
      color: '',
    },
    title: 'electronics'
  },
  computers: {
    class: {
      fill: 'flaticon-pc-search',
      outline: '',
      color: '',
    },
    title: 'computers'
  },
  health: {
    class: {
      fill: 'flaticon-first-aid-briefcase',
      outline: '',
      color: '',
    },
    title: 'health'
  },
  groceries: {
    class: {
      fill: 'flaticon-groceries',
      outline: '',
      color: '',
    },
    title: 'groceries'
  },
  fashion: {
    class: {
      fill: 'flaticon-casual-t-shirt',
      outline: '',
      color: '',
    },
    title: 'fashion'
  },
  vacation: {
    class: {
      fill: 'flaticon-beach',
      outline: '',
      color: '',
    },
    title: 'vacation'
  },
  travel: {
    class: {
      fill: 'flaticon-airplane-around-earth',
      outline: '',
      color: '',
    },
    title: 'travel'
  },
  leisure: {
    class: {
      fill: '',
      outline: '',
      color: '',
    },
    title: 'leisure'
  },
  fitness: {
    class: {
      fill: 'flaticon-fit',
      outline: '',
      color: '',
    },
    title: 'fitness'
  },
  commutes: {
    class: {
      fill: 'flaticon-school-bus-front',
      outline: '',
      color: '',
    },
    title: 'commutes'
  },
  jewelries: {
    class: {
      fill: 'flaticon-diamond-1',
      outline: '',
      color: '',
    },
    title: 'jewelries'
  },
  banking: {
    class: {
      fill: '',
      outline: '',
      color: '',
    },
    title: 'banking'
  },
  clothing: {
    class: {
      fill: 'flaticon-casual-t-shirt',
      outline: '',
      color: '',
    },
    title: 'clothing'
  },
  dinning: {
    class: {
      fill: 'flaticon-restaurant',
      outline: '',
      color: '',
    },
    title: 'dinning'
  },
  food: {
    class: {
      fill: 'flaticon-restaurant',
      outline: '',
      color: '',
    },
    title: 'food'
  },
  restaurants: {
    class: {
      fill: 'flaticon-restaurant',
      outline: '',
      color: '',
    },
    title: 'restaurants'
  },
  amazon: {
    class: {
      fill: 'flaticon-amazon-logo',
      outline: '',
      color: '',
    },
    title: 'amazon'
  },
  target: {
    class: {
      fill: '',
      outline: '',
      color: '',
    },
    title: 'target'
  },
  baby: {
    class: {
      fill: 'flaticon-baby',
      outline: '',
      color: '',
    },
    title: 'baby'
  },
  gym: {
    class: {
      fill: 'flaticon-man-lifting-weight',
      outline: '',
      color: '',
    },
    title: 'gym'
  },
  shopping: {
    class: {
      fill: 'flaticon-laptop',
      outline: '',
      color: '',
    },
    title: 'shopping'
  },
  flights: {
    class: {
      fill: 'flaticon-departures-1',
      outline: '',
      color: '',
    },
    title: 'flights'
  },
};
