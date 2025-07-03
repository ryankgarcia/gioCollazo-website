import './PopUp.css';
import { createPortal } from 'react-dom';
import type { ReactNode } from 'react';

type Props = {
  isPopupOpen: boolean;
  positionTo?: HTMLElement | null;
  onClose?: () => void;
  children: ReactNode;
};

export function PopUp({ isPopupOpen, positionTo, onClose, children }: Props) {
  if (!isPopupOpen) return null;

  let top = '50%';
  let left = '50%';
  const position = 'absolute';

  if (positionTo) {
    const rect = positionTo.getBoundingClientRect();
    top = `${rect.bottom + 8}px`;
    left = `${rect.left}px`;
  }
  return createPortal(
    <>
      <div style={{ top, left, position, zIndex: 1000 }}>{children}</div>
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          backgroundColor: 'black',
          width: '100vw',
          height: '100vh',
          opacity: '.5',
          zIndex: 999,
          pointerEvents: 'auto',
        }}
      ></div>
    </>,
    document.body,
  );
}
