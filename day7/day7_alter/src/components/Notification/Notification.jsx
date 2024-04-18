import { X } from "react-feather";
import styles from "./style.module.css";
import { useEffect, useState } from "react";

export default function Notification({
  visible,
  setVisible,
  text,
  closeAuto = true,
  delay = 3000,
}) {
  const [isOpen, setIsOpen] = useState(visible);
  const [progress, setProgress] = useState(100);

  const handleCLose = () => {
    setVisible(false);
    setIsOpen(false);
  };

  useEffect(() => {
    if (!closeAuto) return;

    // let interval = setTimeout(()=>{handleCLose()},delay);
    // return ()=> clearTimeout(interval);

    let interval = setInterval(() => {
      setProgress((prevProg) => {
        if (prevProg <= 0) {
          clearInterval(interval);
          handleCLose();
          return 0;
        } else {
          return prevProg - 1;
        }
      });
    }, delay / 100);

    return () => {
      clearInterval(interval);
    };
  }, [visible]);
  useEffect(() => {
    setIsOpen(visible);
    setProgress(100);
  }, [visible]);

  if (!isOpen) return <></>;
  return (
    <div className={styles.notification} style={{}}>
      <X className={styles.icon} onClick={handleCLose} />

      {text}

      {closeAuto && <div className={styles.progressBar}>
          <div
          className={styles.progressIndicator}
            style={{width: `${progress}%`}}
          >
            
            </div>
      </div>}
    </div>
  );
}
