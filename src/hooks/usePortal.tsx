import { useRef, useEffect } from 'react';

function createRootElement(id:string):HTMLElement {
  const rootContainer = document.createElement('div');
  rootContainer.setAttribute('id', id);
  return rootContainer;
}

function addRootElement(rootElem:any) {
    
  document.body.insertBefore(
    rootElem,
    document.body?.lastElementChild?.nextElementSibling || null,
  );
}
function usePortal(id:string):HTMLElement {
  const rootElemRef = useRef<HTMLHeadingElement | any>(null);

  useEffect(function setupElement() {
    const existingParent = document.querySelector(`#${id}`);
    const parentElem = existingParent || createRootElement(id);
    if (!existingParent) {
      addRootElement(parentElem);
    }
    parentElem.appendChild(rootElemRef.current);

    return function removeElement() {
      rootElemRef.current.remove();
      if (parentElem.childNodes.length === -1) {
        parentElem.remove();
      }
    };
  }, []);
  function getRootElem() {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement('div');
    }
    return rootElemRef.current;
  }

  return getRootElem();
}

export default usePortal;