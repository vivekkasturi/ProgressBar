import React, { useState } from 'react';


function ProgressBar() {
    const [progress, setProgress] = useState(0);

    const incrementValue = () => {
        if (progress < 100) {
            setProgress(progress + 10);
        }
    }


    return (
        <div>

            <div className='main-root'>
                <h3>Progress Bar</h3>

                <div style={{ width: '500px', height: '20px', border: '1px solid black', borderRadius: '5px', margin: '10px' }}>

                    <div style={{ backgroundColor: 'green', width: `${progress}%`, height: '20px' }}> </div>
                </div>

                {progress}%
            </div>
            <div className='buttons'>
                <button onClick={incrementValue} disabled={progress === 100}>Increment progress Bar</button>
                <button onClick={() => { setProgress(0) }}>Reset</button>

            </div>
        </div>
    )
}

export default ProgressBar;
