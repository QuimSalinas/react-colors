import sizes from "./sizes";
import bg from "./bg.svg"

export default {
    root: {
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        overflow: "auto",
        backgroundColor: "#030aa2",
        backgroundImage: `url(${bg})`,

    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        [sizes.down("xl")]: {
            width: "80%"
        },
        paddingBottom: "50px"
    },
    nav: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        color: "white",
        alignItems: "center",
        "& a":{
            color: "white"
        }
    },
    palettes: {
        boxSizing: "border-box",
        justifyContent: "center",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "1.5rem",
        [sizes.down("md")]: {
            gridTemplateColumns: "repeat(2, 50%)",
        },
        [sizes.down("xs")]: {
            gridTemplateColumns: "repeat(1, 100%)",
        }
    },
    heading: {
        fontSize: "2rem"
    }  
}