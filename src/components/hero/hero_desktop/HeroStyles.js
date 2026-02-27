export const getTabletStyles = (isTablet) => {
  if (!isTablet) return {};

  return {
    phone: {
      width: "48rem",
      height: "25rem",
      top: "-10px",
    },
    phoneImage: {
      width: "100%",
      height: "100%",
    },
    leftPart: {
      top: "2rem",
      left: "50%",
      right: "auto",
      transform: "translateX(-50%)",
      position: "sticky",
      marginLeft: "10rem",
      marginTop: "auto",
    },
    rightPart: {
      left: "50%",
      right: "auto",
      transform: "translateX(-50%)",
      position: "sticky",
      top: "2rem",
      marginLeft: "28rem",
      marginTop: "auto",
    },
    glow: {
      transform: "translate(-50%, 0)",
      marginLeft: "2rem",
      marginTop: "10rem",
      width: "10rem",
      height: "10rem",
    },
    aboveImage: {
      paddingTop: "7rem",
    },
    mainTitle: {
      fontSize: "2.5rem",
    },
    talesfmTitle: {
      fontSize: "2rem",
    },
    subtitle: {
      fontSize: "1rem",
    },
    downloadTitle: {
      fontSize: "2.2rem",
    },
    downloadDesc: {
      fontSize: "1.2rem",
    },
    downloadBtn: {
      fontSize: "0.9rem",
    },
    downloadBtnSpan: {
      fontSize: "0.7rem",
    },
    downloadBtnSpan2: {
      fontSize: "1.1rem",
    },
    downloadBtnGap: {
      gap: "2rem",
    },
  };
};
