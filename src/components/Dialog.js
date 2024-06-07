import { useState } from 'react';

function Dialog() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
   
    const Dialog = () => {
        setIsDialogOpen(!isDialogOpen);
      };

  return (
    <div>
      <button className="dialog-button" onClick={Dialog}>OPEN DIALOG</button>
      {isDialogOpen && (
        //Dialog content
        <div className="dialog-box">
          <div className="dialog-content">
            <h2>Hi, there!</h2>
            <p>You are checking my dialog!</p>
            <button onClick={Dialog}>CLOSE DIALOG</button>
          </div>
        </div>

      )}
    </div>
    
  )
}

export default Dialog