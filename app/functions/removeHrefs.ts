import React from 'react'
type JSXElement = React.ReactNode

export function removeHrefs(input: JSXElement | string): JSXElement | string {
  if (typeof input === 'string') {
    // Handle HTML code within a string
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = input

    // Remove href attributes from anchor elements
    const anchorElements = tempDiv.getElementsByTagName('a')
    for (let i = 0; i < anchorElements.length; i++) {
      //   anchorElements[i].removeAttribute('href') // will make it unclickable but also removes the href attribute which may be undesirable
      //   anchorElements[i].setAttribute('href', '#') // will make it clickable but will scroll to the top
      // anchorElements[i].setAttribute('href', 'javascript:void(0)') // will make it clickable but will not scroll to the top
    }

    // Return the modified HTML string
    // return tempDiv.innerHTML
    return input
  }

  // For JSX elements, recursively traverse and modify them
  //   if (typeof input === 'object') {
  //     if (
  //       (input as React.ReactElement).type === 'a' &&
  //       (input as React.ReactElement).props &&
  //       (input as React.ReactElement).props.href !== undefined
  //     ) {
  //       // Clone the element without the href attribute
  //       return React.cloneElement(input as React.ReactElement, {
  //         href: 'javascript:void(0)',
  //         style: { cursor: 'pointer' }
  //       })
  //     } else {
  //       return React.cloneElement(input as React.ReactElement, {
  //         href: 'javascript:void(0)',
  //         style: { cursor: 'pointer' }
  //       })
  //     }

  //     // Recursively traverse and modify child elements
  //     const newChildren = React.Children.map(
  //       (input as React.ReactElement).props.children,
  //       (child) => removeHrefs(child)
  //     )

  //     // Clone the element with updated children
  //     return React.cloneElement(input as React.ReactElement, {
  //       children: newChildren
  //     })
  //   }

  // Return unmodified input for other cases
  return input
}
