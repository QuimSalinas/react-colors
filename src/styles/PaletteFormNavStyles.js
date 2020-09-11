import {DRAWER_WIDTH} from "../constants"
import sizes from "./sizes"

const drawerWidth = DRAWER_WIDTH;

const styles = theme => ({
    root: {
        display: "flex"
    },
    appBar: {
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "64px"
      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen
        })
      },
      menuButton: {
        marginLeft: 12,
        marginRight: 20
      },
      navBtns: {
        marginRight: "1rem",
        textAlign: "right",
        width: "200px",
        [sizes.down("xsButtons")]: {
          marginRight: 0,
          width: "150px",
      }
      },
      button: {
        margin: "0 0.5rem",
        width: "100%",
        whiteSpace: "nowrap",
      },
      link: {
        textDecoration: "none"
      },
      buttonRoot2: {
        margin: "0 5px",
        whiteSpace: "nowrap",
        [sizes.down("xsButtonsSmall")]: {
          minWidth: "50px",
          padding: "5px",
          fontSize: "10px"
        }
      },
      buttonRoot: {
        margin: "0 5px",
        whiteSpace: "nowrap",
        [sizes.down("xsButtonsComplete")]: {
          minWidth: "50px",
          padding: "5px",
          margin: "0 5px",
          fontSize: "10px"
        }
      }
});

export default styles;