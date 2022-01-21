import React, { useEffect, useRef } from "react";
import {
  faAlignCenter,
  faAlignJustify,
  faAlignLeft,
  faAlignRight,
  faBold,
  faFont,
  faHeading,
  faImage,
  faItalic,
  faLink,
  faListOl,
  faListUl,
  faUnderline,
  faParagraph,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TextEditor({ value, handleInputChange, name }) {
  const contentRef = useRef(null);
  useEffect(() => {
    console.log((contentRef.current.innerHTML = value));
  }, []);
  const handleClick = (e) => {
    const command = e.target.closest("button").dataset["element"];
    if (command === "heading") {
      document.execCommand(command, false, "H3") ||
        document.execCommand("formatBlock", false, "<h3>");
    } else if (command === "insertParagraph") {
      document.execCommand("formatblock", false, "p");
    } else {
      document.execCommand(command, false, null);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      document.execCommand("insertParagraph", false);
      document.execCommand("formatBlock", false, "p");
    }
    if (!e.target.innerText.trim().length) {
      document.execCommand("formatBlock", false, "p");
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();

    // get text representation of clipboard
    let text = (e.originalEvent || e).clipboardData.getData("text/plain");

    // insert text manually
    document.execCommand("insertHTML", false, text);
  };
  // console.log(handleInputChange);
  return (
    <div className="editor">
      <div className="editor__head">
        <button onClick={handleClick} type="button" data-element="bold">
          <FontAwesomeIcon icon={faBold} />
        </button>
        <button onClick={handleClick} type="button" data-element="italic">
          <FontAwesomeIcon icon={faItalic} />
        </button>
        <button onClick={handleClick} type="button" data-element="underline">
          <FontAwesomeIcon icon={faUnderline} />
        </button>
        <button
          onClick={handleClick}
          type="button"
          data-element="insertUnorderedList"
        >
          <FontAwesomeIcon icon={faListUl} />
        </button>
        <button
          onClick={handleClick}
          type="button"
          data-element="insertOrderedList"
        >
          <FontAwesomeIcon icon={faListOl} />
        </button>
        {/* <button onClick={handleClick} type="button" data-element="createLink">
          <FontAwesomeIcon icon={faLink} />
        </button> */}
        <button onClick={handleClick} type="button" data-element="justifyLeft">
          <FontAwesomeIcon icon={faAlignLeft} />
        </button>
        <button
          onClick={handleClick}
          type="button"
          data-element="justifyCenter"
        >
          <FontAwesomeIcon icon={faAlignCenter} />
        </button>
        <button onClick={handleClick} type="button" data-element="justifyRight">
          <FontAwesomeIcon icon={faAlignRight} />
        </button>
        <button onClick={handleClick} type="button" data-element="justifyFull">
          <FontAwesomeIcon icon={faAlignJustify} />
        </button>
        <button onClick={handleClick} type="button" data-element="heading">
          <FontAwesomeIcon icon={faHeading} />
        </button>
        <button
          onClick={handleClick}
          type="button"
          data-element="insertParagraph"
        >
          <FontAwesomeIcon icon={faParagraph} />
        </button>
        {/* <button onClick={handleClick} type="button" data-element="insertImage">
          <FontAwesomeIcon icon={faImage} />
        </button> */}
      </div>
      <div
        ref={contentRef}
        className="editor__content"
        onInput={handleInputChange}
        onKeyPress={handleKeyPress}
        onPaste={handlePaste}
        contentEditable="true"
        data-name={name}
      ></div>
    </div>
  );
}
