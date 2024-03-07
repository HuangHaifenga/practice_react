declare  namespace IRouteType {
    interface  IMeta {
        pageTitle:string
    }
    interface  IRouer {
        path:string;
        emement:React.LazyExoticComponent<()=> JSX.Element >;
        meta:IMeta;
        chileren?:IRouer[];
    }
}