import sizes from "./sizes"

export default {
    navbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "6vh",
    },
    logo: {
        marginRight: "50px",
        padding: "0 13px",
        fontSize: "18px",
        backgroundColor: "#eceff1",
        fontFamily: "Roboto",
        height: "100%",
        display: "flex",
        alignItems: "center",
        "& a": {
            textDecoration: "none",
            color: "black",
        },
        [sizes.down("xs")]: {
            display: "none"
        }
    },    
    slider: {
        width: "340px",
        margin: "0 10px",
        display: "inline-block",
        "& .rc-slider-track": {
            backgroundColor: "transparent",
            height: "8px"
        },
        "& .rc-slider-rail": {
            height: "8px"
        },
        "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover": {
            backgroundColor: "green",
            outline: "none",
            border: "2px solid green",
            boxShadow: "none",
            width: "13px",
            height: "13px",
            marginTop: "-3px"
        },
        [sizes.down("sm")]: {
            width: "150px"
        }
    },
    selectContainer: {
        marginLeft: "auto",
        marginRight: "1rem"
    }
}