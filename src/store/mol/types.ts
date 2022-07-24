enum Pages {
  Welcome = 'welcome',
  Details = 'details',
}

type Actions = {
  switchPage: (page: Pages) => void;
};

export type { Actions };
export { Pages };
