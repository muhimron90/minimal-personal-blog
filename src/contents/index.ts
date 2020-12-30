interface ILinks {
    title: string;
    link: string;
}

/*
inline types arrayObject
const functName : {a :  struing; b : string}[] =[]
  */
export const Links: ILinks[] = [
    { title: 'Home', link: '/' },
    { title: 'Projects', link: '/projects/' },
    { title: 'About', link: '/about/' }
];
