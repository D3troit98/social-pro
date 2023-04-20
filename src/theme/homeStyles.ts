const homeStyles = {
  toolBar: {
    height: "10vh",
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    backgroundColor: "white",
  },
  logo: {
    color: "blue",
    cursor: "pointer",
  },
  link: {
    color: "#000",
  },
  menuIcon: {
    color: "#000",
  },
  formContainer: {
    flexGrow: 1,
    padding: "10px",
    maxWidth: "700px",
    margin: "30px auto",
    width: "100%",
  },
  form: {
    marginTop: "30px",
  },
  formHeading: {
    textAlign: "center",
  },
  heroBox: {
    width: "100%",
    display: "flex",
    minHeight: "600px",
    alignItems: "center",
    justifyContent: "center",
  },
  gridContainer: {
    display: "flex",
    alignItems: "start",
    maxWidth: "1300px",
    padding: "50px",
    "@media (max-width: 600px)": {
      width: "100%",
      flexWrap: "wrap",
    },
  },
  gridContainerHero: {
    display: "flex",
    alignItems: "center",
    maxWidth: "1300px",
    padding: "50px",
    justifyContent: "space-between",
  },
  aboutUsContainer: {
    width: "100%",
    display: "flex",
    minHeight: "400px",
    alignItems: "center",
    justifyContent: "center",
    margin: "30px 0px 50px 0px",
  },
  aboutUsSubtitle: {
    opacity: "0.7",
    paddingBottom: "30px",
    fontSize: "18px",
    lineHeight: "40px",
    "@media (max-width: 600px)": {
      lineHeight: "25px",
    },
  },
  title: {
    paddingBottom: "15px",
  },
  subtitle: {
    paddingBottom: "30px",
  },
  largeImage: {
    width: "100%",
  },
  sectionGridContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    minHeight: "500px",
  },
  sectionGridItem: {
    backgroundColor: "#f2f0f1",
    textAlign: "center",
    padding: "30px",
    width: "200px",
    borderRadius: "10px",
    margin: "10px !important",
  },
  inputField: {
    marginBottom: "20px !important",
  },
  textArea: {
    width: "100%",
    marginBottom: "20px",
    fontSize: "16px",
    padding: "10px",
  },
  footerContainer: {
    display: "flex",
    alignItems: "center",
    miHeight: "10vh",
    padding: "20px",
    justifyContent: "center",
    backgroundColor: "#f2f0f1",
    flexDirection: "column",
  },
  footerText: {
    paddingBottom: "10px",
  },
  footerDate: {
    opacity: "0.4",
  },
  testimonialCard: {
    backgroundColor: "#fff",
    padding: "10px",
    minHeight: "200px",
    display: "flex",
    alignItems: "center",
    transition: "transform 0.2s ease-in-out",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  testimonialStatement: {
    paddingBottom: "25px",
  },
  avatar: {
    marginRight: "10px",
  },
  testimonialPosition: {
    fontSize: "14px",
    opacity: "0.6",
  },
};

export default homeStyles;
