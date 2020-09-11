import chroma from "chroma-js"
import sizes from "./sizes"

export default {
    colorBox: {
        width: "20%",
        height: props => props.showingFullPalette?"25%":"50%",
        margin: "0",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        "&:hover button": {
            opacity: 1
        },
        [sizes.down("lg")]: {
            width: "25%",
            height: props => props.showingFullPalette?"20%":"33.333333%",
        },
        [sizes.down("md")]: {
            width: "50%",
            height: props => props.showingFullPalette?"10%":"20%",
        },
        [sizes.down("xs")]: {
            width: "100%",
            height: props => props.showingFullPalette?"5%":"10%",
        }
    },
    copyText: {
        color: props => chroma(props.background).luminance() >= 0.7 ? "rgba(0,0,0,0.5)" : "white"
    },
    colorName: {
        color: props => chroma(props.background).luminance() <= 0.08 ? "white" : "rgba(0,0,0,0.5)"
    },
    seeMore: {
        color: props => chroma(props.background).luminance() >= 0.5 ? "rgba(0,0,0,0.5)":"white",
        backgroundColor: "rgba(255,255,255,0.3)",
        position: "absolute",
        border: "none",
        right: "0px",
        bottom: "0px",
        width: "60px",
        height: "25px",
        textAlign: "center",
        lineHeight: "30px",
        textTransform: "uppercase"
    },
    copyButton: {
        color: props => chroma(props.background).luminance() >= 0.7 ? "rgba(0,0,0,0.5)":"white",
        cursor: "pointer",
        width: "100px",
        height: "30px",
        position: "absolute",
        display: "inline-block",
        top: "50%",
        left: "50%",
        marginTop: "-15px",
        marginLeft: "-50px",
        textAlign: "center",
        outline: "none",
        backgroundColor: "rgba(255,255,255,0.3)",
        fontSize: "1rem",
        lineHeight: "30px",
        textTransform: "uppercase",
        border: "none",
        textDecoration: "none",
        opacity: 0
    },
    boxContent: {
        position: "absolute",
        width: "100",
        left: "0px",
        bottom: "0px",
        color: "black",
        padding: "10px",
        letterSpacing: "1px",
        textTransform: "1px",
        fontSize: "12px"
    },
    copyOverlay: {
        opacity: "0",
        zIndex: "0",
        height: "100%",
        width: "100%",
        transition: "transform 0.6s ease-in-out",
        maxWidth: "100vw"
    },
    showOverlay: {
        opacity: "1",
        transform: "scale(50)",
        zIndex: "10",
        position: "absolute"
    },
    copyMessage: {
        zIndex: "-10",
        position: "fixed",
        left: "0",
        right: "0",
        bottom: "0",
        top: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2rem",
        transform: "scale(0.1)",
        opacity: "0",
        color: "white",
        "& h1": {
            fontWeight: "400",
            textShadow: "1px 2px black",
            backgroundColor: "rgba(255,255,255,0.2)",
            width: "100%",
            textAlign: "center",
            marginBottom: "0",
            padding: "1rem",
            textTransform: "uppercase",
            [sizes.down("xs")]: {
                fontSize: "3rem"
            }
        },
        "& p": {
            fontSize: "2rem",
            fontWeight: "100"
        }
    },
    showMessage: {
        opacity: "1",
        transform: "scale(1)",
        zIndex: "25",
        transition: "all 0.4s ease-in-out",
        transitionDelay: "0.3s"
    }
}