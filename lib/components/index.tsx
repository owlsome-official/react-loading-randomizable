import LoadingComponent from "./LoadingComponent";

/* Style Config */
const defaultContainerStyle: React.CSSProperties = {
  position: "fixed",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  zIndex: 9999,
};

const defaultTextStyle: React.CSSProperties = {
  position: "absolute",
  paddingTop: "128px",
  top: "50%",
  left: "50%",
  fontSize: "1.6rem",
  fontWeight: "bold",
  color: "white",
  transform: "translate(-50%, -50%)",
};

/* Interfaces */
export interface OverlayLoadingProps {
  active?: boolean;
  number?: number;
  style?: React.CSSProperties;
  className?: string;
  text?: React.ReactNode;
  textStyle?: React.CSSProperties;
  textClassName?: string;
}

/* Utils */
const randomIntFunc = (maxVal = 1) => {
  const buf = new Uint8Array(1);
  if (window?.crypto && window?.crypto?.getRandomValues) {
    window.crypto.getRandomValues(buf);
  }
  return buf[0] % maxVal;
};

/* Component */
export const OverlayLoading = ({
  active = true,
  number = -1,
  style = {},
  className = "",
  text = "",
  textStyle = {},
  textClassName = "",
}: OverlayLoadingProps): React.ReactNode => {
  if (!active) return null;

  let loadingComponentIdx = 0;
  if (number >= 0) {
    loadingComponentIdx = ~~number;
  } else {
    loadingComponentIdx = randomIntFunc(30) | 0;
  }

  return (
    <div
      data-testid="loading-container"
      style={{ ...defaultContainerStyle, ...style }}
      className={className}
    >
      <LoadingComponent index={loadingComponentIdx} />
      <span
        style={{ ...defaultTextStyle, ...textStyle }}
        className={textClassName}
      >
        {text || "Loading..."}
      </span>
    </div>
  );
};
