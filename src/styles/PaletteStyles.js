import sizes from "./sizes";

export default {
    palette: {
        height: "100vh",
        display: "flex",
        flexDirection: "column"
    },
    paletteColors: {
        height: "100%",
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "row", 
        flexWrap: "wrap", 
        justifyContent: "flex-start",
        alignContent: "flex-start"
    },
    deactivateOverflow: {
        overflow: "hidden"
    },
    goBack: {
        width: "20%",
        height: "50%",
        margin: "0",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        backgroundColor: "black",
        "& a": {
            color: "white",
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
        },
        [sizes.down("lg")]: {
            width: "25%",
            height: "33.33333%"
        },
        [sizes.down("md")]: {
            width: "50%",
            height: "20%"
        },
        [sizes.down("xs")]: {
            width: "100%",
            height: "10%"
        }
    },
}
