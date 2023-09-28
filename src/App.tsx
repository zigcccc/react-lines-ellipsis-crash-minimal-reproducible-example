import { useState } from 'react';
import LinesEllipsis from 'react-lines-ellipsis';

import styles from './App.module.css';

const App = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div className={styles.container}>
      <h1>react-lines-ellipsis</h1>
      <h2>Safari Translation Crash</h2>
      {visible && (
        <>
          <LinesEllipsis basedOn="letters" maxLine={1} text="Some english text that will get truncated and translated with Safari Translation feature" />
          <LinesEllipsis basedOn="letters" maxLine={1} text="Another instance of text, again truncated, will also be translated into selected language" />
          {/** This one will actually cause the crash, since it's not being truncated. For that reason it looks like
           *   this.canvas is null and the app crashes.
           */}
          <LinesEllipsis basedOn="letters" maxLine={1} text="Short one" />
        </>
      )}
      <button className={styles.button} onClick={() => setVisible((current) => !current)}>
        {visible ? 'Hide truncated' : 'Show truncated'}
      </button>
    </div>
  );
}

export default App
