export const iterate = (src, comp) => {};
export const isClassComponent = (component) => {
  return (
    typeof component === "function" && !!component.prototype.isReactComponent
  );
};

function isFunctionComponent(component) {
  return (
    typeof component === "function" &&
    String(component).includes("return React.createElement")
  );
}
