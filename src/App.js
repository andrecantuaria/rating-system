import './style/style.css';
import StarRating from './components/StarRating';
import Dialog from './components/Dialog';

function App() {
  return (
    <main>
      <div className="container">
        <div className="content">
          <StarRating />
          <Dialog />
        </div>
     </div>
    </main>

    
  );
}

export default App;
