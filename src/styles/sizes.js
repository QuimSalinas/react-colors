import {DRAWER_WIDTH} from "../constants";
export default {
    up(){

    },
    down(size){
        const sizes = {
            xsButtonsComplete:`${DRAWER_WIDTH+474}px`,
            xsButtonsSmall:"454px",
            xs:"576px",
            sm: "768px",
            md: "992px",
            lg: "1200px",
            xl: "1600px"
        }
        return `@media (max-width: ${sizes[size]})`;
    }
}