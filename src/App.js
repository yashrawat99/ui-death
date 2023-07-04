import Button from './components/atoms/Button/Button';
import Icon from './components/atoms/Icon/Icon';
import Spinner from './components/atoms/Spinner/Spinner';

function App() {
  return (
    <div className="App">
      <Button type="primary">Primary Button</Button>
      <Icon
        path={
          'https://w7.pngwing.com/pngs/698/812/png-transparent-download-save-save-on-computer-upload-file-guardar-audio-controls-ui-icons-free-icon.png'
        }
      />
      <Spinner width={'20px'} tMS={800} color={'red'} />
    </div>
  );
}

export default App;
