export default Scrollama;
declare class Scrollama {
    static contextType: any;
    constructor(props: any);
    scroller: scrollama.ScrollamaInstance;
    steps: any[];
    props: any;
    reset(): void;
    setupRef(ref: any): () => void;
    initialize(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): any;
}
import scrollama from "scrollama";
