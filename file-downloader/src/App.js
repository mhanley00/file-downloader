import React from 'react';
import logo from './logo.svg';
import FileSaver from 'file-saver';
import CsvFile1 from './resources/LA_County_101pts.csv';
import CsvFile2 from './resources/SIDE_5000_Random_Pts_ipr1317.csv';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <div className='instructions'>
          <h2>How to Use This App</h2>
          <ol>
            <li>Replace any files in the resources folder with the ones you want to test downloading or uploading in <code>resources/file-name</code></li>
            <li>Update the names of the files that are being imported as <em>File1</em>, <em>File2</em> etc in <code>src/App.js</code> as needed and the file names in each button's <em>onClick</em> function</li>
            <li>Update the <code>"homepage"</code> reference url to the alpha link where you'll host this and run <code>npm run build</code> to create the build.</li>
            <li>Open the alpha link in SauceLabs and voilà! Save the files you need to test uploading to the VM and test away ✌️</li>
          </ol>
        </div>
        <button onClick={FileSaver.saveAs(CsvFile1, 'LA_County_101pts.csv')}>
          Click here to download or 'Save As' <code>LA County 101 points</code>
        </button>
        <button
          onClick={FileSaver.saveAs(
            CsvFile2,
            'SIDE_5000_Random_Pts_ipr1317.csv'
          )}
        >
          Click here to download or 'Save As'{' '}
          <code>SIDE 5000 random points</code>
        </button>
      </header>
    </div>
  );
}

export default App;
