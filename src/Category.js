import React, { useEffect, useState, useRef, Fragment } from "react";
import SubCategory from "./SubCategory";
import ContentLoader from "react-content-loader";

const LazyCategory = (props) => {
  let categoryEl = useRef(null);
  const [display, setDisplay] = useState(false);
  const { name, subCategory, rowIndex, checkFlag } = props;
  const ino = useRef(null);
  function checkInter(entry) {
    if (entry.isIntersecting) {
      if (!display) {
        setDisplay(true);
        // console.log("last set", name, checkFlag, rowIndex);
      }
      props.checkIndex.current = rowIndex;
    } else {
      display && setDisplay(false);
    }
  }

  useEffect(() => {
    const callbackF = (INOEntries, ino) => {
      const [entry] = INOEntries;
      checkInter(entry);
    };
    ino.current = new IntersectionObserver(callbackF);
    ino && props.checkFlag && ino.current.observe(categoryEl.current);
  }, []);

  useEffect(() => {
    rowIndex == 0 && console.log("test", name, props.checkFlag, ino.current);
    if (ino) {
      // if (props.checkFlag) {
      //   //console.log("upd if", props.name, props.checkFlag, props.rowIndex);
      //   ino.current.observe(categoryEl.current);
      // } else {
      //   //console.log("upd else", props.name, props.checkFlag, props.rowIndex);
      //   ino.current.unobserve(categoryEl.current);
      // }
    }
  }, [props.checkFlag]);

  return (
    //
    <div ref={categoryEl} className="categoryPanel">
      {display ? (
        <>
          <h4 className="categoryHeading">{`${props.rowIndex} ${name}`}</h4>
          {subCategory.map((subcategory) => (
            <SubCategory key={subcategory.id} {...subcategory} />
          ))}
        </>
      ) : (
        <ContentLoader>
          {[
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20
          ].map((count) => {
            return (
              <Fragment key={count + 1}>
                <rect
                  key={count + 1}
                  x="1"
                  y={count * 50}
                  rx="4"
                  ry="4"
                  width={count % 2 == 0 ? "230" : "200"}
                  height="17"
                />
                <rect
                  key={count * 2 + 2}
                  x="330"
                  y={count * 50}
                  rx="4"
                  ry="4"
                  width="400"
                  height="25"
                />
              </Fragment>
            );
          })}
        </ContentLoader>
      )}
    </div>
  );
};

export default LazyCategory;
