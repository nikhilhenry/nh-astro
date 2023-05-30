import { DocSearchModal, useDocSearchKeyboardEvents } from "@docsearch/react";
import { createPortal } from "preact/compat";
import { useCallback, useEffect, useRef, useState } from "preact/hooks";

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const searchButtonRef = useRef(
    document.getElementById("docsearch-search-button")
  );
  const [initialQuery, setInitialQuery] = useState<string>();

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const onInput = useCallback(
    (e: KeyboardEvent) => {
      setIsOpen(true);
      setInitialQuery(e.key);
    },
    [setIsOpen, setInitialQuery]
  );

  useEffect(() => {
    searchButtonRef.current?.addEventListener("click", onOpen);
    return () => searchButtonRef.current?.removeEventListener("click", onOpen);
  }, [searchButtonRef.current, onOpen]);

  useDocSearchKeyboardEvents({
    isOpen,
    onOpen,
    onClose,
    onInput,
    searchButtonRef,
  });

  if (!isOpen) return null;

  return createPortal(
    <DocSearchModal
      initialQuery={initialQuery}
      initialScrollY={window.scrollY}
      onClose={onClose}
      appId="E1VULT68ST"
      apiKey="882d61bc857180f54ef5d19ec0b9100d"
      indexName="nikhilhenry"
      transformItems={(items) => {
        return items.map((item) => {
          // We transform the absolute URL into a relative URL to
          // work better on localhost, preview URLS.
          const url = new URL(item.url);
          if (url.hash === "#overview") url.hash = "";
          return {
            ...item,
            url: url.href.replace(url.origin, ""),
          };
        });
      }}
      placeholder="Search site"
    />,
    document.body
  );
}
