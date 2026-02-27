export const getHeroTabletStyles = (isTablet) => {
  if (!isTablet) return {};
  return {
    wrapper: {
      overflowX: "hidden",
      touchAction: "pan-y",
      overscrollBehaviorX: "none",
      overscrollBehaviorY: "contain",
    },
    stickyArea: { zIndex: 10 },    aboveImage: {
      // 70% of desktop's 7rem ≈ 4.9rem; keep close to existing 6rem but reduce slightly
      paddingTop: "7rem",
    },
    talesfmTitle: {
      // 70% of desktop 2rem => 1.4rem
      fontSize: "3.5rem",
    },
    mainTitle: {
      // 70% of desktop 2.5rem => 1.75rem
      fontSize: "2.5rem",
    },
    subtitle: {
      // 70% of desktop 1rem => 0.7rem
      fontSize: "1rem",
    },
    phone: {
      // 70% of desktop 48rem x 25rem => 33.6rem x 17.5rem; but we need extra canvas room for rotation, so keep larger container
      width: "50.6rem",
      height: "40.5rem",
      top: "12rem",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 5,
    },
    phoneImage: { width: "100%", height: "100%" },
    leftPart: {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "24rem",
      transformOrigin: "center center",
      zIndex: 0,
      opacity: 0,
      visibility: "hidden",
      pointerEvents: "none",
    },
    rightPart: {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "24rem",
      transformOrigin: "center center",
      zIndex: 0,
      opacity: 0,
      visibility: "hidden",
      pointerEvents: "none",
    },
    download: {
      marginTop: "80vh",
      transformOrigin: "top center",
      position: "absolute",
      right: 0,
      zIndex: 350,
    },
    // 70% of desktop sizes
    downloadTitle: { fontSize: "1.54rem" },
    downloadDesc: { fontSize: "0.84rem" },
    downloadBtn: { fontSize: "0.63rem" },
    downloadBtnSpan: { fontSize: "0.49rem" },
    downloadBtnSpan2: { fontSize: "0.77rem" },
    downloadBtnGap: { gap: "1.4rem" },
  };
};
