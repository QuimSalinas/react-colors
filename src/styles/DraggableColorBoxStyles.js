import sizes from "./sizes";
import chroma from "chroma-js";

const styles = {
    root: {
        width: "20%",
        height: "25%",
        margin: "0",
        position: "relative",
        cursor: "pointer",
        "&:hover svg": {
            color: "white",
            transform: "scale(1.5)"
        },
        [sizes.down("lg")]: {
            width: "25%",
            height: "20%"
        },
        [sizes.down("md")]: {
            width: "50%",
            height: "10%"
        },
        [sizes.down("sm")]: {
            width: "100%",
            height: "5%"
        }
    },
    boxContent: {
        margin: "0",
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        color: props => chroma(props.color).luminance() <= 0.08 ? "white" : "rgba(0,0,0,0.5)",
        boxSizing: "border-box",
        padding: "10px",
        letterSpacing: "1px",
        textTransform: "1px",
        fontSize: "12px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 0,
        [sizes.down("sm")]: {
            paddingBottom: 0
        },
    },
    deleteIcon: {
        transition: "all 0.3s ease-in-out",
            width: "20px"
        
    }
}

export default styles;